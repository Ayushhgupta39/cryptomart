import { Avatar, Button, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChartOutlined,
  MenuOutlined,
  HomeOutlined,
  FundOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setscreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size={"large"} icon={<BarChartOutlined />} />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>CryptoMart</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to={"/cryptocurrencies"}>Market</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to={"/news"}>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
