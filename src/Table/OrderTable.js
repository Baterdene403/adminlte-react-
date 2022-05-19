import React, { useContext, useEffect} from "react";
import OrderContext from "../Context/OrderContext"
const OrderTable = (props) => {
  const orderContext = useContext(OrderContext);
 


  useEffect(()=> {
    const script = document.createElement("script");
    script.src = "js/init_datatable.js";
    script.async = true;
    document.body.appendChild(script);
    orderContext.loadOrders();
  
  },[]) 

 
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Захиалгын жагсаалт</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Сургалт нэр</th>
                <th>Худалдан авсан огноо</th>
              </tr>
            </thead>
            <tbody>
          {
            orderContext.state.orders.map(el=> 
              <tr>
              <td>{el.courses.map(el=><div>{el}</div>)}</td>
              <td>{el.date}</td>
            </tr> )
          }
           
            </tbody>
            <tfoot>
              <tr>
                <th>Сургалт нэр</th>
                <th>Худалдан авсан огноо</th>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* /.card-body */}
      </div>
    );
  
}
export default OrderTable;