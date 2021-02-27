const {
  customerExecuteSQL,
  adminExecuteSQL,
} = require("../database/dbQuery.js");

const ACCESS_TOKEN_SECRECT = "DBProject";

async function findProductById(id) {
  try {
    const productFetched = await customerExecuteSQL('call getProductById(?)',[parseInt(id)]).then();

    var productDetail=JSON.parse(JSON.stringify(productFetched[0][0]));
    var colors=JSON.parse(JSON.stringify(productFetched[1]));
    var sizes=JSON.parse(JSON.stringify(productFetched[2]));
    var a_variant=JSON.parse(JSON.stringify(productFetched[3][0]));
    var category=JSON.parse(JSON.stringify(productFetched[4][0]));
    var sub_category=JSON.parse(JSON.stringify(productFetched[5][0]));

    var dis_colors = [];
    for(i=0;i<colors.length;i++){
      dis_colors.push(colors[i].color);
    }

    var dis_sizes=[];
    for(i=0;i<sizes.length;i++){
      dis_sizes.push(sizes[i].size);
    }

    const product = {};
    product.product_id = id;
    product.product_name = productDetail.product_name;
    product.description = productDetail.description;
    product.weight = productDetail.weight;
    product.dimension = productDetail.dimension;
    product.brand = productDetail.brand;
    product.category = category.category_name;
    product.subCategory = sub_category.subcat_name;
    product.colors=dis_colors;
    product.sizes=dis_sizes;
    product.Onevariant={
      color:a_variant.color,
      size:a_variant.size,
      noStock:a_variant.no_stock,
      imageUrl:a_variant.image_url,
      price:a_variant.price
    };    

    return product;

  } catch (e) {
      console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
      return "Product Not Found";
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

    return variant;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
    return "Variant Not Found";
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
      "SELECT product_id, product_name , description, weight, dimension, brand FROM product WHERE category_Id =(SELECT category_id FROM category WHERE category_name=?)",
      [category]
    );
    for (let index = 0; index < category_products.length; index++) {
      const product = category_products[index];

      const variants = await customerExecuteSQL(
        "SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?",
        [parseInt(category_products[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
    }
    return category_products;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
    return "Category Not Found";
  }
}

async function findProductsBySubCategory(category, subcategory) {
  try {
    const category_products = await customerExecuteSQL(
      "SELECT product_id, product_name , description, weight, dimension, brand FROM product WHERE category_id =(SELECT category_id FROM category WHERE category_name=?) AND subcat_id=(SELECT subcat_id FROM subcategory WHERE subcat_name=? AND category_id =(SELECT category_id FROM category WHERE category_name=?))",
      [category, subcategory, category]
    );
    for (let index = 0; index < category_products.length; index++) {
      const product = category_products[index];

      const variants = await customerExecuteSQL(
        "SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?",
        [parseInt(category_products[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
    }
    return category_products;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
    return "Sub Category Not Found";
  }
}

async function getProducts() {
  try {
    const productData = await customerExecuteSQL(
      "SELECT product_id, product_name , description, weight, dimension, brand FROM product"
    );
    for (let index = 0; index < productData.length; index++) {
      const product = productData[index];

      const variants = await customerExecuteSQL(
        "SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?",
        [parseInt(productData[index].product_id)]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
      product.color = variants[0].color;
      product.offer = variants[0].offer;
      product.no_stock = variants[0].no_stock;
    }
    return productData;
  } catch (e) {
    console.log("Error :", JSON.parse(JSON.stringify(e))["error"]);
    return "Error";
  }
}

//--------------------------------------------------------------------------------

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

async function editVariant(
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
      "UPDATE variant set SKU=?, image_url=?, price=?, offer=? color=?, size=?, no_stock=? WHERE product_id=? AND variant_id=?",
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
    return e;
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

async function getProductsForAdmin() {
  try {
    const productData = await adminExecuteSQL("SELECT * FROM product");
    for (let index = 0; index < productData.length; index++) {
      const product = productData[index];

      const variants = await adminExecuteSQL(
        "SELECT variant_Id , SKU , image_url ,price, offer, color,size, no_stock FROM variant WHERE product_id =?",
        [parseInt(productData[index].product_id)]
      );
      //console.log(variants[0]);

      const category = await adminExecuteSQL(
        "SELECT category_name from category where category_id=?",
        [parseInt(product.category_id)]
      );

      const subcategory = await adminExecuteSQL(
        "SELECT subcat_name from subcategory where subcat_id=?",
        [product.subcat_id]
      );

      const supplier = await adminExecuteSQL(
        "SELECT supplier_name from supplier where supplier_id=?",
        [product.supplier_id]
      );

      product.imageUrl = variants[0].image_url;
      product.price = variants[0].price;
      product.color = variants[0].color;
      product.offer = variants[0].offer;
      product.no_stock = variants[0].no_stock;
      product.category = category[0].category_name;
      product.subcat_name = subcategory[0].subcat_name;
      product.supplier_name = supplier[0].supplier_name;
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
  // category_description,
  subcategory_name,
  supplier_name,
  // contact_number,
  // email,
  variant_id,
  SKU,
  // image_url,
  // image,
  price,
  offer,
  color,
  size,
  no_stock
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
    const last_insert = await adminExecuteSQL(
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
      "return LAST_INSERT_ID()"
    );

    const last_insert_product_id = last_insert.insertId;

    await adminExecuteSQL(
      "INSERT INTO variant (variant_id, product_id, SKU, price, offer, color, size, no_stock) VALUES (?,?,?,?,?,?,?,?)",
      [
        variant_id,
        last_insert_product_id,
        SKU,
        price,
        offer,
        color,
        size,
        no_stock,
      ]
    );

    // insert image --------------------

    return "new product is added";
  } catch (e) {
    console.log(e);
    return "Error";
  }
}

async function editProduct(product_id, description, weight, dimension, brand) {
  try {
    await adminExecuteSQL(
      "UPDATE product set description=?, weight=?, dimension=?, brand=? WHERE product_id=?",
      [description, weight, dimension, brand, product_id]
    );
    return "success";
  } catch (e) {
    return "Error";
  }
}

async function deleteProduct(product_id) {
  try {
    await adminExecuteSQL("DELETE FROM variant WHERE product_id=?", [
      product_id,
    ]);
    await adminExecuteSQL("DELETE FROM product WHERE product_id=?", [
      product_id,
    ]);

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
  getProductsForAdmin,
  createProduct,
  editProduct,
  deleteProduct,
  findVariantsById,
  addVariant,
  deleteVariant,
  editVariant,
};
