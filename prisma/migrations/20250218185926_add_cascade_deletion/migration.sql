-- DropForeignKey
ALTER TABLE "menu_categories" DROP CONSTRAINT "menu_categories_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "order_products" DROP CONSTRAINT "order_products_orderId_fkey";

-- DropForeignKey
ALTER TABLE "order_products" DROP CONSTRAINT "order_products_productId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_menuCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_restaurantId_fkey";

-- AddForeignKey
ALTER TABLE "menu_categories" ADD CONSTRAINT "menu_categories_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "menu_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_products" ADD CONSTRAINT "order_products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
