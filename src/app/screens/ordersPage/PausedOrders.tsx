import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrievePausedOrders } from "./selector";
import { Order } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => pausedOrders,
);

export default function PausedOrders() {
  const pausedOrders = useSelector(pausedOrdersRetriever);

  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders.map((order: Order) => {
          const productPrice = order.orderItems.reduce(
            (sum, item) => sum + item.itemPrice * item.itemQuantity,
            0,
          );

          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order.orderItems.map((item) => {
                  const product: Product | undefined = order.productData.find(
                    (entry) => entry._id === item.productId,
                  );
                  const imagePath = product?.productImages?.[0]
                    ? `${serverApi}/${product.productImages[0]}`
                    : "";

                  return (
                    <Box key={item._id} className="orders-name-price">
                      <img
                        src={imagePath}
                        className="order-dish-img"
                        alt={product?.productName ?? ""}
                      />
                      <p className="title-dish">
                        {product?.productName ?? "Product unavailable"}
                      </p>
                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>{item.itemQuantity}</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemPrice * item.itemQuantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>${productPrice}</p>
                  <img src="/icons/plus.svg" alt="" />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src="/icons/pause.svg" alt="" />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  className="cancel-button"
                >
                  Cancel
                </Button>
                <Button variant="contained" className="pay-button">
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}
        {pausedOrders.length === 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/icons/noimage-list.svg"
              alt="No paused orders"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
