import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { Order } from "../../../lib/types/order";
import { retrieveFinishedOrders } from "./selector";

const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => finishedOrders,
);

export default function FinishedOrders() {
  const finishedOrders = useSelector(finishedOrdersRetriever);

  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders.map((order: Order) => {
          const productPrice = order.orderItems.reduce(
            (sum, item) => sum + item.itemPrice * item.itemQuantity,
            0,
          );

          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order.orderItems.map((item) => {
                  const product = order.productData.find(
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
                  <img
                    src="/icons/pause.svg"
                    alt=""
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <p className="data-compl">
                  {new Date(order.updatedAt).toLocaleString("ko-KR", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>
              </Box>
            </Box>
          );
        })}
        {finishedOrders.length === 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/icons/noimage-list.svg"
              alt="No finished orders"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
