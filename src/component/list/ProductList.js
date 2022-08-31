import "./ProductList.css"
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai";
const ProductList = (dataProps) => {
  const color = ["#000", "#456", "#566", "#008"];
  return (
    <div className="row_product">
      {dataProps.data.map((item, index) => {
        return (
          <div className="contain_product">
            <div>
              <img 
                src={item.image}
                width={270}
                height={340}
              />
            </div>

            <div className="row_product_name">
                <div className="product_name">{item.name}</div>
                {index % 2 ==  0 && <AiFillHeart className="icon_heart"/>}
                {index % 2 !=  0 &&<AiOutlineHeart className="icon_heart"/>}
            </div>
            <div className="row_price">
              <div className="full_price">USD ${item.full_price}</div>
              <div className="discount">{item.discount}%</div>
              <div className="price">USD ${item.price}</div>
            </div>
            <div className="row_color">
              {color.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight : 2,
                      border: "1px solid",
                      backgroundColor:  item ,
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
