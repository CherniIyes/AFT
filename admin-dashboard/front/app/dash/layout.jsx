import Side from "../Components/sidebar/sidebar"
import  "../dash/dashBoard.css"
const layout = ({ children }) => {
      return (
            <html lang="en">
                  <body>
                        <div className="fullContainer">
                              <div className="sidebar">
                                    <Side />
                              </div>
                              <div className="theRest">
                                    {children}
                              </div>
                        </div>
                  </body>
            </html>
      );
}

export default layout;