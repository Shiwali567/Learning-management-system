import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";
import Admin from "./Admin";
import Learn from "./Learn";
const App = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // style //

  const btnStyle = {
    margin: "20px",
    padding: "60px",
    background: "#171332",
    border: "1px solid #3b3470",
    color: "#d4d2d2",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  };

  const inputStyle = {
    margin: "10px ",
    padding: "12px",
    width: "220px",
    background: "#2f2b4d",
    color: "#d4d2d2",
    border: "1px solid #3b3470",
    borderRadius: "6px",
    // outline: "none",
  };

  const loginBtn = {
    padding: "12px 25px",
    margin: "10px 5px",
    color: "#d4d2d2",
    background: "#4c3cff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const backBtn = {
    margin: "10px 5px",
    padding: "12px 25px",
    color: "#d4d2d2",
    border: "1px solid #3b3470",
    background: "transparent",
    borderRadius: "6px",
    cursor: "pointer",
  };
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
      {location.pathname !== "/admin" &&
        location.pathname !== "/learn" &&(
            <div
              style={{
                background: "linear-gradient(to right, #191834, #1c172f)",
                minHeight: "100vh",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#d4d2d2",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Logo */}
                <img
                  src={logo} //
                  alt="logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                {/* project name */}
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  EduNexa
                </span>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "80px",
                  width: "100%",
                }}
              >
                {(role || isRegister) && (
                  <button
                    style={{
                      ...backBtn,
                      position: "absolute",
                      right: "20px",
                      display: "flex",
                      alignItems: "center",
                      top: "20px",
                    }}
                    onClick={() => {
                      setRole("");
                      setIsRegister(false);
                    }}
                  >
                    Back
                  </button>
                )}

                {!role && !isRegister && (
                  <>
                    <button style={btnStyle} onClick={() => setRole("ADMIN")}>
                      ADMIN
                    </button>
                    <button style={btnStyle} onClick={() => setRole("LEARN")}>
                      LEARN
                    </button>
                    <p></p>
                  </>
                )}

                {/* login */}
                {role && !isRegister && (
                  <>
                    <div
                      style={{
                        marginTop: "20px",
                        padding: "30px",
                        background: "#25214a",
                        borderRadius: "15px",
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        width: "300px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <h3 style={{ marginTop: "20px" }}>{role} LOGIN</h3>

                      <>
                        <input
                          style={inputStyle}
                          type="email"
                          placeholder="ENTER YOUR EMAIL"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <br></br>
                        <input
                          style={inputStyle}
                          type="password"
                          placeholder="ENTER PASSWORD"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <br></br>
                        <button
                          style={loginBtn}
                          onClick={() => {
                            if (role === "ADMIN") {
                              navigate("/admin");
                            } else if (role === "LEARN") {
                              navigate("/learn");
                            }
                          }}
                        >
                          LOGIN
                        </button>
                      </>
                      <button
                        style={backBtn}
                        onClick={() => setIsRegister(true)}
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>
              {isRegister && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "30px",
                    background: "#25214a",
                    borderRadius: "15px",
                    width: "300px",
                    margin: "auto",
                  }}
                >
                  <h3>REGISTER</h3>

                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="FULL NAME"
                  />
                  <br />

                  <input style={inputStyle} type="email" placeholder="EMAIL" />
                  <br />

                  <input
                    style={inputStyle}
                    type="password"
                    placeholder="PASSWORD"
                  />
                  <br />

                  <input
                    style={inputStyle}
                    type="password"
                    placeholder="CONFIRM PASSWORD"
                  />
                  <br />

                  <button style={loginBtn}>REGISTER</button>
                </div>
              )}

              <footer
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: "12px 0",
                  background: "rgba(25, 20, 60, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderTop: "1px solid #3b3470",
                  textAlign: "center",
                  color: "#bcb8ff",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                <span>© 2026 EduNexa</span>
                <span style={{ margin: "0 10px", color: "#6c63ff" }}>|</span>
                <span>All Rights Reserved</span>
              </footer>
            </div>
        )}
        </>
  );
};

export default App;
