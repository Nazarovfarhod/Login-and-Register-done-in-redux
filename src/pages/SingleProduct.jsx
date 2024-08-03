import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { incrementProduct, decrimentProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function SingleProduct() {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "10px",
      }}
    >
      {products?.length === 0 && <p>No products found</p>}
      {products?.map((product) => {
        if (product.id.toString() === id) {
          const [disable, setDisable] = useState(false);
          useEffect(() => {
            if (product.amount) {
              setDisable(true);
            } else {
              setDisable(false);
            }
          }, [product.amount]);
          return (
            <div
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: "90%",
                margin: "auto",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={product.thumbnail}
                alt={product.title}
              />
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    margin: "10px 0",
                  }}
                >
                  {product.title}
                </h1>
                <p
                  style={{
                    maxWidth: "100%",
                    margin: "0 auto",
                    fontSize: "1rem",
                  }}
                >
                  {product.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    <p
                      style={{
                        textDecoration: "line-through",
                        opacity: "0.5",
                        margin: "0",
                      }}
                    >
                      Old Price: ${product.price}
                    </p>
                    <p style={{ margin: "0" }}>
                      Sale Price: $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: "20px" }}>
                      {!disable && <button disabled={true}>-</button>}
                      {disable && (
                        <button
                          onClick={() => dispatch(decrimentProduct(product.id))}
                        >
                          -
                        </button>
                      )}
                      <span>{product.amount ? product.amount : 0}</span>
                      <button
                        onClick={() => {
                          dispatch(incrementProduct(product.id));
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default SingleProduct;
