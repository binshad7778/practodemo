import React from "react";
import { Link, Outlet } from "react-router-dom";
import Popup from "reactjs-popup";

const Navbar = () => {
  return (
    <>
      <div className="all">
        <img
          className="practologo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAABrCAMAAAD951N3AAAAvVBMVEX///8mMHcst98kLnYfKnQhLHVkaZYPHm+uscpVW5MVInEgK3WNkbMXJHLs7fJcYZEbJ3MoNHyWmrlJT4eChqj29vne4OouOHxCSogMHG8AF23o6fDT1eIAEmxHT4u4u9CdoLvGyNlVxOU1Pn/Z2uYACWptcp3Mzt7Dxdd5fqY6Q4Pu+fyxtMulqMRWXZF2e6W75fNDvuKl3fCS1+3K6/aB0Orl9vtqyueb2e5qcqLY8fnF6vUABmoAsd2Qk7ENCw4VAAARuklEQVR4nO2dCXfaOhOGIbJxsLERAQO2WQNha4CmbZqmven//1kfZvGiGUmWSXLP9ef3nPb0FDOS9WgZSSNRqZTKpy6Q829nqdT1qrd6aVl3/3aWSl2vtkbSMkqsBVDbqqZlllgLoBJrIVViLaRKrIVUibWQKrEWUiXWQqrEWkiVWAupEmshVWItpEqshVSJtZD6f8LaHSynq+Wg635eku4hzdV0OQjeyZ4TvsJU/g5t/b2wBpcUc37/QxUsG7tNj1iUWqS3aa+X15az6ziBIy7bYLlvx2nuGoPrAhSCweR1NKvq2vkdFo9zvsH3wOoGy7vXfu+cYmuzW4//jRiL1S2j8eWTaafv25pOqlUS/tEt29usV0JjY66xQwE/Nta1+qg/anZued93V4uNR60oTaKZ3qgzuHwqMo/J2dZmnklDc5d3oJ7d7sw5zwOs2usjm6Q41UOKPf+UIjmlqNme1Y5e4dPUHBop+bPjf7uPB6bsW1YJ9VsTQWvb+Yyxzfnh+d/+0LOpZum6rpkz3IRz1/MpYZPU7Yf6qR44G9b8SPRmg7VnaOAVqlXLHrbxigWwVjUDyt/wUlzufV6Ko60oq++vmpbOgt4P/3fcM1j34fK5qTe4YJussfbx0fneS1YRvY8ZcBqmyTKNCnc2DZ8YMUWm1fnvtawbFLcWlrPR2iJ5gFjREuBUpmVblKJZxVL8MGFYnbUheEFijHhdMYrVnbTsFC8U67jPg3osFdpxVbAGHQraffolzBHsS6/BGqxNTZiibrbFI9i7CmAdVbptQ5jBquZ1cGMYVrfpM9YQrO56KClSsx24mbGOe6bY2kHWcMG6MldgfWzZ8hT99ac1WBYraQ98Dc9W4iFjhDrFEGvFHYH3hVjnGzkG2hrXs2F19kNxtTzLpkyDBfNWVAjWoJYtRbP1WQ2WxVpt9bLUWTpbIsYQrHU43gCsUyqtSOHXWj2m7HCsy7684ZwtGpPUN/O21umMP6gy3/2sBQ6AtZqp3lU1rOKxWEn7zkPejcE6tjIVJ8wZinWpZ6kjZ3mN5FdzYl3RjPk/psgZv95ZEGtGkQfYXlmsVYJZZ7DeivwzoTCsYy9btTznz1skvpsP662nlH+v9h7YZMqNtapTMMkGWPEvprBORR6wWAjWsUrLCWXs48zkwnprK+bfWLCZ/gDlx1rV+qzflANrt5q3rWJY57qytUSvmAfr0lRPscFm+/11Bdaq+coYU8fqNrN6G4gAVmem/jYk9ptyYA0yOZhMih539fTddA3WqscsialjbSAuVWYBrM2sPnBK3vT8dfUJjos4+nIR88PXiK/CSmi6G1bGurRyD6xViPVOPvtFRLz9+fvqrbWTK8WqtfnodYmrsFbtdcqYMtZclT0Sg3UuXi/kGaF3l+wot9ZBPqoHt+nvddR+fn2+v3l7u7l//vY7B1ZiaZRSwWKnkZrlqGIdD/kpHxMWN2YG645bR47GKDY9JkY/7hAhVt2GMvrxF7jvK8s+vxv+8e3l6ebt5un++9cvnEe+3t9EOjz5DXlOgFWnfqteW3cWu41nc3JIm9mxknAPkiSwurzmEW7t7hadfa3e8gQzljTWW59jzDwaW9fqPZ81ZpnJ7gZ0wvqugyhqaVuOY3BIsd88ZL/ZJrzs0x0K7Of3EGmklx8Y9/vEE0eyT98UsNqzxSpwQwKuM+i04e7rUSRZ7QRYiWbY1V6v19IM7zKyrPBi0Wi7MTgGUbhu8LiYcXu6FFa3jiZOtYuxMHBhPUvNku1NalUYRkdM0MI/yxmhtZJa7bv5KftOcFub4fNyOoUGv/y6YfUC+tjnN/DQzdv9z4xY6XCbdoemfXT9JjW6crFqnl+fTAfzg5ar7asreJwMd+k3Dv7y9h5SWFdYY4XGGsPIGPF26T0cxaCXR6xW6sNmevUtmSIv7yf9fkKI3fxKPfOFbaoXsAx+DlajCQNwthZSO8lDwqnjYNW9HbZzMcDav6bDfdBuHd8pTBUNNs5pVcTYzjh/SNmIBUWsfST/tAffdNA2kMw/sKPrVw6wl8QzX+7RZ0KlueJYY+8wlT9s7u0lSg7Hqvfw6Tc2H6EjLNDI7aA9WRLrEqlyHGP7sJSJ3QZeixrWFeJ40zYWa+iuEa42s9b0lccryfWFS/XmKdUPo1i9Cf4mA2SApfv4cxSr3uJ4few+W/hsjxOCiU4Qk1g7cCVCb3GM7e2DB7yHFVcN6x5JsceJzVzDZ0k6ousHH9jb8+UhbFyNdJ80h2E19xWOxkj2WnF3jWHVbU7hzpGh6YEXFFipIQtISazIyOpzjb36SFeviNWFO+fE5MYFI5MvP5mFnwJeN29nT/ePiOrN2/dkcUES1ogf2NqA3YkfN0YMKxuCEOkWmCI2Pz4vaMGOIoF1CbAKjb2irUoJK3Tjif3IfboLt7Fp0tkU9K6hjh2sYGBNPHUSgtUQBcJuQOkm3h3BSrnbULDbFEUSVrawQiWen4BOWtspL9ApYf0LUxTtpN6B7Fv1OIPidnhzc+yGOT5VrERzhViFuatMQPYSz0OsxOf1SyDgjOmWgAiM4o2wuvA1xMZQqWB1dyDFIRYHFAlsyxISDxKSxnpqiLLGevMULzch5SEMo3If2OetdlTrIFZ+Y3VBY00YwgSba4zVmYEFopH6aroKVqcFQ3CEKcL+JC7o37J2GI6bwuH39NSfKDWI1RC/O1jM0TfRQAWxGtytxS5YD2ZdfkZzpCAvnwVgaJUYQ6VyYq4LUhQvSVUGYHCNrX+XEnvK0Aef++qjAFatieYqEmg0JJ7AQKxDrm8IXQ5PEm1ZZ0s9xgo9Jk+9D1bCCrPvC/vgirthucY92b0U2M3vyrP8oacoNYDVkJwWWbKuOrGj94FYfa4d2Kc+SLrNPZtyjBV61TJjmFQ6Ydin/iOxDkrauuzwybvXm7evWdjHgytIzJa0mS5YRTCiZVeA1eIffkJavaRcwKpUjBXWESoxhkkFK8iMNPsN1pkgs/MngqWISL8qTxmeilYQYSeMbC0k5fRZrHHnCbDyPSZY3fU+99mTwNJ6jBUYi4pMRSpYASTeiatIsB5Xz5/8yQDsORPWaCMPdg0SrC54+dgtAlgFjguo7lKsU3YAjbHCtsM9rSjQx2Ids7WS6OdPuMvBCb1ch5VgG4FJIVijxRUVrLCByUgIsEJjPYkxTCouE8Qqyz4fa5bWep9lbOV3wkQ2tjpgPyp2OgFWk49VfWwF5SJwmYglMYbpKpdJl1UkmMdLJ5xlbH2RL1kkd3GgJ8xf2DyqOwNjK99lErTWR+DlDCXlAkoyxgp3tB8kxjCptFbopMmyD9v3pSL8zoD1ewWGTkCsUWLQE5bM48EEp2rysQpaK2h7gjnuSYIJDuifpcYwqbRWJPuSC1P4E5wv8mHzMMHJ0KYFyxEyzwVWU8JfjhDUEbjKxF+ROsoVLEfAVSaJMVQqWOEqk2QB5OrliJ9S+MLFw6H4vhkQlyVaPBRgdUFoFOVu8x41EByEdMBkWmIMlQrWgLAp2uIjjjB8I15t/CZdFwy7V+ngKlzqZ87ysq+jtNQvwgrGaEKE3VgD7oTFOzhgpZpo6pdIKe3ggOqdjCdABPch/Wjwki4zHbfIZUPwWyKaDWLFL2Lh544KNuYEY2ulBgdp0bDuCvdbgT8iNoZLab+1A7Iv/DEkBwRTkESAj3S99+jiypprIgwc20af8HM3h8Ebom10kf8FV1X1mcDP+QujXhJYoQcjNDZGx0ElrHAZWgcHQxNCggYSeyqSnblzPMtPcdBLMggcwcqNE6tgTaw6FAS9iJrMCjY/m7+Djx13SWB1/oHG2GOasbotv5PlXiZRrYSjEXsiKakprJSpsVgYfBa1Q9EYnAo8RUPUtB6vG0ZCmfSeIERNhNVlL/Y5aMjbPgo2SMBoMkhmBN+DPaYZyelrxGzBfTSAlfI5VSow/Id4vDl/FwnFHaYCMu9FVKM1QQH9+9RJHDSg1K7hXGG/mX51JaxwQz5MGS8Yp40dm0pifUSyJjSmU3AbHMAq2IA6zPRgisTGJznOBgkETMeCiKYvid71hcc1HSbMCf82aohX595h5yGE4d9CrHB0Ch3YCfJkMEIPwyWxwv1CnrHuxZixYyJOwcS4SgWj5Ry5E0e3sB6i20eyz47bXD83FSjKaa9vT8ypOc5hDbsF6t18h56ESm6Uq2HFeqbwJhRQlFsLz2QqUnGBBBITr8a6Ce5fMzKmDSepz2DUmWC0RP2M8OoYkP0Jeu3UP+xzHK4pT+igb1iz/s7Y4h6tIkZ9muwl5msDfTIFTg0rFuteDc+4dZIs3NWGe8VlEivio4fGaMpYcNtKdZ1GM/npKzRhdJhuKxjcXbr2AZ59q5G06YzxI3NIhfmCtMS3J3AW8ieYDd3Do8vcg5BEo7vG0jmqe9ds4ffUkNSBCEWsc/yII7F7i233lPJ03ba5Z8TTccVrlOvRWHC0NZgsQA2hvcT4Cye/h6/3O9NTVoLBatup9enD5PL8Ak/RjFJ0VmvOAVLSwo4c/AEt8Tt2dPnHy1tUAd7e7r8ij4hOo1um77UOMn3u7Zt2KvxBESunXMJNX2NIDwlXPZ93XjpUGmv3AX/ybIz6vokchtL9fdQeb9GTjXZYCIe/h75n2Boh8ZrfHM5xTl85Z5/43umOaigT792/fHuKiB3+8cweW4309dfL/UEvvCPrkrsjyOkAOU/MWSKl5YiQhOgGSHHKoZhTAHB1MWmM+5EdbUV2OTezpnOSCBwV3QgizL4+4y40/v72fCT2/As7ip5V110JwhytU8WKnXNTEIPVmWW60gOIXGbLMEIAUwIrjAHPKP+jb2a6Cit7EY0yVhiNryL2zM4438Ur2ubSdPDhmVEyzPs2381+VBKLfb2uu26LObmqjFXx5klG4ChWrsu79Pj44pJ/80ysVPR+J0+KVu/Df2vjGqxgy0Id61XXqMETdjmuUSPVxCoiPO4FlcKa5xo1QsTx/++hK7CaC3b1LQfWfNfLnQSxuth6jlDETK67YEuQrNJnbbB1QZUUP0j5sVJ4wC0H1oPbkTsHyHlYZ6PWXslDet24L88Mc4QqyHz19znFoSQG8F2UGytF7u3Lg7XSVSyXWNgxZ6eu4jcRm3FJsYVeRuzJOKetUpMs6xPaKoY12yzB3iGr4LmwVrrZ+jE4DURPr7u77Pc2WwSUsdy3BQceVVLUWpLo+ncSDHNsZgFrtrG9DdVVprMCkqG96rN2prv6K+46q3dNCXIHzdaX/XTLBKS4wC5eQlPkXT7z3gJYzbv5TNar6B7wlo7KibXi1Dj3FcayWwGIHuLdNTGGv2mGiPjY7mP4ixDiSoYdT74dZklRH+LF9gGCWBuVoIYELiTKw25x4g7yYg036IXlctzvAosF3CtEujV8uykp2+Kt9Mx3wgaLnjqfN01ZH6ebm89wlk7CsFbchqBb1EywiXlRfqyVwU5w6T21JhVkDUhwM8xqJL5Dn1qv/O7QnWwEkPAIPnc8Ev7WFzF7jU/8wU8Ua1jKD3jzocM235VrUpKWSlTnYw+/spLYw90RwdpmrFPRhT+PG27HSOx/apIbAR77Q4O9M5ZY1DT8B+hmnb9z2/N5jUEzho33+pHhTOJgPYDdW8yvVhKiGdpCVB5Nq5UWVQrWHdcMk/mhTF3zrPV5a7JDGesEv5T3otXC8ijrPx/Y+K1OBsdlvl2P6NAzzFCG5w/9Xn3/d7sUjY7jhW3AFLVDvZx88k/zcrEeHNRtc2aYVNcJ0cOfl7U3za24yjlAai6CGzSaG8OgWpgm0Q+NY1a7jQrEheYl9oJtrX/It6aT86/82l6rvl5lLWLX6a62k1Db8XQu+53oS4ob0zilGJYaNbzerjH/zN/4PEqA9aDu9O61PyNWr79bP179G9qZFCy36/qmp1Vno9fJ9Or5QLC87TT7s1Z4yfqs2Rl/fAlHKeq9fn39Dq+QR2Kspf6jKrEWUiXWQqrEWkiVWAupEmshVWItpEqshVSJtZAqsRZSJdZCqsRaSJVYC6kSayFVYi2kSqyFVIm1kCqxFlIl1kKqxFpIlVj/I/ofrG11jKXTh+gAAAAASUVORK5CYII="
          alt=""
        />
        <Link className="link" to={"/"}>
          Find Doctor
        </Link>
        <Link className="link" to={"/Video"}>
          Video Consult
        </Link>
        <Link className="link"> Medcines</Link>

        {/* <Link className="link"  to={"/Labtest"}>Lab Test</Link> */}

        <Popup
          trigger={
            <Link className="link" to={"/Labtest"}>
              Labtest{""}
            </Link>
          }
          modal
          nested
        >
          {(close) => (
            
            <div className="modal1">
              <div className="content">
                <span className="city">Select a City</span>
              </div>
              <div>
                <input type="text" list="places" placeholder="Please Select" />
                <datalist id="places">
                  <option value="Bengaluru"></option>
                  <option value="Delhi"></option>
                  <option value="Chennai"></option>
                  <option value="Mumbai"></option>
                  <option value="Kerala"></option>
                  <option value="Kolkata"></option>
                </datalist>
              </div>

              <span className="top_cities">Top Cities</span>

              <div className="place_main">
                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Bangalore.svg?1556796588"
                    alt=""
                  />
                  <span>Bangalore</span>
                </div>

                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Delhi.svg?1556796588"
                    alt=""
                  />
                  <span>Delhi</span>
                </div>

                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Mumbai.svg?1556796588"
                    alt=""
                  />
                  <span>Mumbai</span>
                </div>

                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Chennai.svg?1556796588"
                    alt=""
                  />
                  <span>Chennai</span>
                </div>

                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Hyderabad.svg?1556796588"
                    alt=""
                  />
                  <span>Hyderabad</span>
                </div>

                <div className="places_set_aakan_ullath">
                  <img
                    src="https://www.practo.com/tests/public/icons/topcities/Pune.svg?1556796588"
                    alt=""
                  />
                  <span>Pune</span>
                </div>
              </div>

              <span>All cities</span>
              <span>Bangalore Chennai Delhi Gurugram</span>
              <span>Hyderabad Mumbai NaviMumbai Noida</span>
            </div>
          )}
        </Popup>

        <Link className="link">Surgeries</Link>
        <div className="navbar navbar-expand-lg navbar-dark bg-white ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="dropdownhover dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    For Coporates
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-white">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Health and wellness plan
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Group Insurance
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-dark bg-white ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="dropdownhover dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    For Providers
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-white">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Practo Prime
                        <img
                          className="verified"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Software for providers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        List your practice for free
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar navbar-expand-lg navbar-dark bg-white ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="dropdownhover dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    For Coporates
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-white">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Data security
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Help
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button className="btnlogin">Login/Signup</button>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
