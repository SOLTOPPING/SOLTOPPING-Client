import styled from "styled-components";
import ProductBtn from "./ProductBtn";

const Product = ({ title, hashtag1, hashtag2, content }) => {
  return (
    <ProductWrapper>
      <ProductContentWrapper>
        <ProductTitle>{title}</ProductTitle>
        <Hashtag>{hashtag1}</Hashtag>
        <Hashtag>{hashtag2}</Hashtag>
        <Productcontent>{content}</Productcontent>
      </ProductContentWrapper>
      <ProductBtn text={"상품 둘러보러 가기 ▶"} />
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProductContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 42px;
`;
const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 13px;
`;
const Hashtag = styled.div`
  font-size: 8px;
  color: #696969;
  margin-bottom: 2px;
  word-break: keep-all;
`;
const Productcontent = styled.div`
  font-size: 10px;
  color: #4e89a0;
  margin: 13px 0;
`;
