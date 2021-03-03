const {
  customerExecuteSQL,
  adminExecuteSQL,
} = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function findProductById(id) {
  try {
    const productFetched = await customerExecuteSQL("call getProductById(?)", [
      parseInt(id),
    ]).then();

    var productDetail = JSON.parse(JSON.stringify(productFetched[0][0]));
    var colors = JSON.parse(JSON.stringify(productFetched[1]));
    var sizes = JSON.parse(JSON.stringify(productFetched[2]));
    var a_variant = JSON.parse(JSON.stringify(productFetched[3][0]));
    var category = JSON.parse(JSON.stringify(productFetched[4][0]));
    var sub_category = JSON.parse(JSON.stringify(productFetched[5][0]));

    var dis_colors = [];
    for (i = 0; i < colors.length; i++) {
      dis_colors.push(colors[i].color);
    }

    var dis_sizes = [];
    for (i = 0; i < sizes.length; i++) {
      dis_sizes.push(sizes[i].size);
    }

    const product = {};
    const Product = {};
    Product.product_id = id;
    Product.product_name = productDetail.product_name;
    Product.description = productDetail.description;
    Product.weight = productDetail.weight;
    Product.dimension = productDetail.dimension;
    Product.brand = productDetail.brand;
    Product.category = category.category_name;
    Product.subCategory = sub_category.subcat_name;
    Product.rating = (
      await customerExecuteSQL(
        "SELECT getAverageRatingForProduct(?) AS rating",
        [parseInt(id)]
      )
    )[0].rating;
    product.Product = Product;
    product.Variants = {
      colors: dis_colors,
      sizes: dis_sizes,
    };
    product.Onevariant = {
      variantId: a_variant.variant_id,
      color: a_variant.color,
      size: a_variant.size,
      noStock: a_variant.no_stock,
      imageUrl: a_variant.image_url,
      price: a_variant.price,
    };

    return product;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function findVariantByParams(product_id, color, size) {
  try {
    const variant = (
      await customerExecuteSQL(
        "SELECT * FROM variant WHERE product_id =? AND color=? AND size=?",
        [parseInt(product_id), color, size]
      )
    )[0];

    const Variant = {
      variantId: variant.variant_id,
      color: variant.color,
      size: variant.size,
      noStock: variant.no_stock,
      imageUrl: variant.image_url,
      price: variant.price,
    };

    return Variant;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function findVariantByIds(product_id, variant_id) {
  try {
    const variant = (
      await customerExecuteSQL(
        "SELECT * FROM variant WHERE product_id =? AND variant_id=?",
        [parseInt(product_id), parseInt(variant_id)]
      )
    )[0];

    const Variant = {
      variantId: variant.variant_id,
      color: variant.color,
      size: variant.size,
      noStock: variant.no_stock,
      imageUrl: variant.image_url,
      price: variant.price,
    };

    return Variant;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function findVariantsById(product_id) {
  try {
    const variants = await adminExecuteSQL(
      "SELECT * FROM variant WHERE product_id=?",
      [parseInt(product_id)]
    );
    return variants;
  } catch (e) {
    return "variants not found";
  }
}

async function findProductsByCategory(category) {
  try {
    const category_products = await customerExecuteSQL(
      "SELECT product_id, product_name FROM product WHERE category_Id =(SELECT category_id FROM category WHERE category_name=?)",
      [category]
    );
    for (let index = 0; index < category_products.length; index++) {
      const product = category_products[index];

      const variants = await customerExecuteSQL(
        "SELECT image_url ,price FROM variant WHERE product_id =?",
        [parseInt(category_products[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
      product.rating = (
        await customerExecuteSQL(
          "SELECT getAverageRatingForProduct(?) AS rating",
          [parseInt(category_products[index].product_id)]
        )
      )[0].rating;
    }
    return getProductTemplate(category_products);
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function findProductsBySubCategory(category, subcategory) {
  try {
    const category_products = await customerExecuteSQL(
      "SELECT product_id, product_name FROM product WHERE category_id =(SELECT category_id FROM category WHERE category_name=?) AND subcat_id=(SELECT subcat_id FROM subcategory WHERE subcat_name=? AND category_id =(SELECT category_id FROM category WHERE category_name=?))",
      [category, subcategory, category]
    );
    for (let index = 0; index < category_products.length; index++) {
      const product = category_products[index];

      const variants = await customerExecuteSQL(
        "SELECT image_url ,price FROM variant WHERE product_id =?",
        [parseInt(category_products[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
      product.rating = (
        await customerExecuteSQL(
          "SELECT getAverageRatingForProduct(?) AS rating",
          [parseInt(category_products[index].product_id)]
        )
      )[0].rating;
    }
    return getProductTemplate(category_products);
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function getProducts() {
  try {
    const productData = await customerExecuteSQL(
      "SELECT product_id, product_name FROM product"
    );

    for (let index = 0; index < productData.length; index++) {
      const product = productData[index];

      const variants = await customerExecuteSQL(
        "SELECT image_url ,price FROM variant WHERE product_id =? LIMIT 1",
        [parseInt(productData[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
      product.rating = (
        await customerExecuteSQL(
          "SELECT getAverageRatingForProduct(?) AS rating",
          [parseInt(productData[index].product_id)]
        )
      )[0].rating;
    }

    return getProductTemplate(productData);
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function getProductTemplate(product_list) {
  const ProductList = {};

  const Categories = await customerExecuteSQL(
    "SELECT DISTINCT category_name FROM category"
  );

  var disCatNSubcat = {};
  for (var i = 0; i < Categories.length; i++) {
    var SubCategories = await customerExecuteSQL(
      "SELECT DISTINCT subcat_name FROM subcategory WHERE category_id=(SELECT category_id FROM category WHERE category_name=?)",
      [Categories[i].category_name]
    );

    var dissubcat = [];
    for (var j = 0; j < SubCategories.length; j++) {
      dissubcat.push(SubCategories[j].subcat_name);
    }
    disCatNSubcat[Categories[i].category_name] = dissubcat;
  }

  ProductList.Categories = disCatNSubcat;

  ProductList.Products = product_list;

  return ProductList;
}

//-------------------------admin - variants -------------------------------------------------------

async function getVariant(product_id, variant_Id) {
  try {
    const variants = await adminExecuteSQL(
      "SELECT * FROM variant WHERE product_id=? AND variant_id=?",
      [product_id, variant_Id]
    );
    return variants;
  } catch (e) {
    return e;
  }
}

async function addVariant(
  product_id,
  variant_id,
  SKU,
  image_url,
  price,
  offer,
  color,
  size,
  no_stock
) {
  try {
    await adminExecuteSQL("INSERT INTO variant values(?,?,?,?,?,?,?,?,?)", [
      variant_id,
      product_id,
      SKU,
      image_url,
      price,
      offer,
      color,
      size,
      no_stock,
    ]);
    return "new variant is added";
  } catch (e) {
    return "Error";
  }
}

async function updateVariant(
  product_id,
  variant_id,
  SKU,
  image_url,
  price,
  offer,
  color,
  size,
  no_stock
) {
  try {
    await adminExecuteSQL(
      "UPDATE variant set SKU=?, image_url=?, price=?, offer=?, color=?, size=?, no_stock=? WHERE product_id=? AND variant_id=?",
      [
        SKU,
        image_url,
        price,
        offer,
        color,
        size,
        no_stock,
        product_id,
        variant_id,
      ]
    );
    return "success";
  } catch (e) {
    console.log(e);
  }
}

async function deleteVariant(product_id, variant_id) {
  try {
    await adminExecuteSQL(
      "DELETE FROM variant WHERE variant_id=? AND product_id=?",
      [variant_id, product_id]
    );

    return "variant is deleted";
  } catch (e) {
    return "Error";
  }
}

//--------------------admin - products -----------------------------------------------------------------------

async function getProductForUpdate(product_id) {
  try {
    const product = await adminExecuteSQL(
      "SELECT product_id, product_name, description, weight, dimension, brand, category_id, subcat_id, supplier_id FROM product WHERE product_id=?",
      [product_id]
    );
    const category_name = await adminExecuteSQL(
      "SELECT category_name FROM category where category_id=?",
      [product[0].category_id]
    );

    const subcategory_name = await adminExecuteSQL(
      "SELECT subcat_name FROM subcategory where subcat_id=?",
      [product[0].subcat_id]
    );

    const supplier_name = await adminExecuteSQL(
      "SELECT supplier_name FROM supplier where supplier_id=?",
      [product[0].supplier_id]
    );
    product[0].category_name = category_name[0].category_name;
    product[0].subcat_name = subcategory_name[0].subcat_name;
    product[0].supplier_name = supplier_name[0].supplier_name;
    return product;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
  }
}

async function getProductsForAdmin() {
  try {
    const productData = await adminExecuteSQL("SELECT * FROM product");
    for (let index = 0; index < productData.length; index++) {
      const product = productData[index];

      const dataFetched = await adminExecuteSQL(
        "call getProductForAdmin(?,?,?)",
        [product.category_id, product.subcat_id, product.supplier_id]
      );
      product.category_name = dataFetched[0][0].category_name;
      product.subcat_name = dataFetched[1][0].subcat_name;
      product.supplier_name = dataFetched[2][0].supplier_name;
    }
    return productData;
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

async function createProduct(
  product_name,
  description,
  weight,
  dimension,
  brand,
  category_name,
  subcategory_name,
  supplier_name
) {
  try {
    const category_id = await adminExecuteSQL(
      "SELECT category_id FROM category where category_name=?",
      [category_name]
    );

    const subcategory_id = await adminExecuteSQL(
      "SELECT subcat_id FROM subcategory where subcat_name=?",
      [subcategory_name]
    );

    const supplier_id = await adminExecuteSQL(
      "SELECT supplier_id FROM supplier where supplier_name=?",
      [supplier_name]
    );
    const lastInsertProductId = await adminExecuteSQL(
      "INSERT INTO product (product_name, category_id, subcat_id, description, weight, dimension, brand,supplier_id) VALUES (?,?,?,?,?,?,?,?)",
      [
        product_name,
        category_id[0].category_id,
        subcategory_id[0].subcat_id,
        description,
        weight,
        dimension,
        brand,
        supplier_id[0].supplier_id,
      ],
      "LAST_INSERT_ID()"
    );

    const InsertProduct = {
      product_id: lastInsertProductId.insertId,
      product_name: product_name,
      category_id: category_id[0].category_id,
      subcat_id: subcategory_id[0].subcat_id,
      description: description,
      weight: weight,
      dimension: dimension,
      brand: brand,
      supplier_id: supplier_id[0].supplier_id,
    };

    return InsertProduct;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function updateProduct(
  product_id,
  product_name,
  description,
  weight,
  dimension,
  brand,
  category_name,
  subcat_name,
  supplier_name
) {
  try {
    const category_id = await adminExecuteSQL(
      "SELECT category_id FROM category where category_name=?",
      [category_name]
    );
    const subcategory_id = await adminExecuteSQL(
      "SELECT subcat_id FROM subcategory where subcat_name=?",
      [subcat_name]
    );

    const supplier_id = await adminExecuteSQL(
      "SELECT supplier_id FROM supplier where supplier_name=?",
      [supplier_name]
    );
    await adminExecuteSQL(
      "UPDATE product set product_name=?, category_id=?, subcat_id=?, description=?, weight=?, dimension=?, brand=?, supplier_id=? WHERE product_id=?",
      [
        product_name,
        category_id[0].category_id,
        subcategory_id[0].subcat_id,
        description,
        weight,
        dimension,
        brand,
        supplier_id[0].supplier_id,
        product_id,
      ]
    );
    return "success";
  } catch (e) {
    console.log(e);
  }
}

async function deleteProduct(product_id) {
  try {
    await adminExecuteSQL("call deleteProduct(?)", [product_id]);
    return "Product is deleted";
  } catch (e) {
    return "Error";
  }
}

module.exports = {
  findProductById,
  getProducts,
  findProductsByCategory,
  findProductsBySubCategory,
  findVariantByParams,
  findVariantByIds,
  getProductForUpdate,
  getProductsForAdmin,
  createProduct,
  updateProduct,
  deleteProduct,
  getVariant,
  findVariantsById,
  addVariant,
  deleteVariant,
  updateVariant,
};
