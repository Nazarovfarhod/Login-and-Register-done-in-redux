import React from "react";

import { Flex, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const items = [
  {
    key: "grp",
    label: "Pages",
    type: "group",
    children: [
      {
        key: "1",
        label: <Link to="/">Home</Link>,
      },
      {
        key: "2",
        label: <Link to="/about">About</Link>,
      },
      {
        key: "3",
        label: <Link to="/contact">Contact</Link>,
      },
    ],
  },
];
const Navbar = () => {
  return (
    <Flex vertical>
      <div>
        <Typography>
          <Title level={3}>My Store</Title>
        </Typography>
      </div>
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Flex>
  );
};
export default Navbar;
