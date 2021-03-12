import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styles from "../Styling/Cinemas.module.css"

export const DropDowns = ({ handleFilters, filters }) => {
    const subRegions = ["Delhi", "Gurgaon", "Greater Noida", "Noida", "Faridabad"];
    // const filters = []
    const menu = (
        <Menu>
            {
                subRegions?.map((region, index) => (
                    <Menu.Item key={index + 1}>
                        <div className={styles.filter__item} style={filters.indexOf(region) >= 0 ? { backgroundColor: "#F84464", color: "white" } : { backgroundColor: "transparent" }} onClick={() => handleFilters(region)}>
                            <span>{region}</span>
                        </div>
                    </Menu.Item>
                ))
            }
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className={styles.filter}>
                    Filter Sub Regions <DownOutlined />
                </div>
            </Dropdown>
            {/* <DropDown>

            </DropDown> */}
        </div>
    )
}