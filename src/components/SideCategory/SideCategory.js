import React from 'react'
import "./SideCategory.css"
import Line from "../Line/Line";
import AutoBrand from "../AutoBrand/AutoBrand";
import AutoBrandAdaptive from "../AutoBrand/AutoBrandAdaptive";

const SideCategory = props => (
    <div className="side-category">
        <div className="side-category-container">
            <h2>Марка авто</h2>
            <Line/>
            <AutoBrand/>
            <AutoBrand/>
            <AutoBrand/>
            <AutoBrand/>
            <AutoBrand/>
            <AutoBrand/>
            <AutoBrand/>
        </div>
    </div>
)

export default SideCategory;