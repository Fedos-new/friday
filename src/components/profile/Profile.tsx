import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../bll/store';
import {ProductType} from '../../bll/profile-reducer'
import ModalW from '../common/ModalW/ModalW';

export const Profile = () => {

  const products = useSelector<AppRootState, any>((state) => state.profile.products)

  const resultProduct = products.map((prod:any) => {
    return (
      <tr>
      <th scope="row">{prod.username}</th>
      <td>{prod.name}</td>
      <td>{prod.cardcount}</td>
      <td>{prod.updates}</td>
      <td>{prod.cards}</td>
      <td>{prod.operation}</td>
    </tr>
    )
  })

  return (
    <div className="container">
        <ModalW activate={true} />
      <div className="row">
          <div className="col">
         <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Поиск по сайту" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-dark" type="button" id="button-addon2">Искать</button>
        </div>           
          </div>
          <div className="col text-end">
          <span>Сортировка по цене:</span>
          <button type="button" className="btn ms-5 me-2 btn-primary">Price UP</button>
          <button type="button" className="btn btn-danger">Price Down</button>
          </div>
      </div>

      <div className="row">
        <div className="col-2">Min</div>
        <div className="col-10"><input type="range" className="form-range" min="0" max="5" id="customRange2"></input></div>        
      </div>
      <div className="row">
        <div className="col-2">Max</div>
        <div className="col-10"><input type="range" className="form-range" min="0" max="5" id="customRange2"></input></div>
      </div>
      <div className="text-start mt-2 mb-2">
      <button type="button" className="btn btn-danger">Мои карты</button>
      <button type="button" className="btn ms-2 btn-danger">Все карты</button>
      </div>
      
        <table className="table table-dark table-sm">

        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Card count</th>
            <th scope="col">Updates</th>
            <th scope="col">Cards</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>

      <tbody>
        {resultProduct}
      </tbody>

        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination ">
            <li className="page-item"><a className="page-link bg-dark text-light" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link bg-dark text-light" href="#">Next</a></li>
          </ul>
        </nav>



    </div>
  );
}
