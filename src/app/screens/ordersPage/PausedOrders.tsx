import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { orders } from "./data";

export default function PausedOrders() {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {orders.map((order) => {
          const productPrice = order.items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0,
          );
          const total = productPrice + order.deliveryCost;

          return (
            <Box key={order.id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order.items.map((item, index) => {
                  return (
                    <Box key={index} className={"orders-name-price"}>
                      <img
                        src={item.image}
                        className={"order-dish-img"}
                        alt=""
                      />
                      <p className={"title-dish"}>{item.name}</p>
                      <Box className={"price-box"}>
                        <p>${item.price}</p>
                        <img src={"/icons/close.svg"} alt="" />
                        <p>{item.qty}</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.price * item.qty}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${productPrice}</p>
                  <img src={"/icons/plus.svg"} alt="" />
                  <p>Delivery cost</p>
                  <p>${order.deliveryCost}</p>
                  <img src={"/icons/pause.svg"} alt="" />
                  <p>Total</p>
                  <p>${total}</p>
                </Box>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"cancel-button"}
                >
                  Cancel
                </Button>
                <Button variant={"contained"} className={"pay-button"}>
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
