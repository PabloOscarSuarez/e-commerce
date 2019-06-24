import axios from 'axios'
import { RECEIVE_SALES, RECEIVE_SALE } from '../../constants';

const receiveSales = (sales) => ({
  type: RECEIVE_SALES,
  sales,
});

export const receiveSale = sale => ({
  type: RECEIVE_SALE,
  sale
});

export const fetchSales = () => dispatch =>
  axios.get(`http://localhost:8000/sales`)
    .then(res => res.data)
    .then(sales => {
      // console.log(sales ,'SOY SALES EN EL ACTION DE FETCHSALES')
      dispatch(receiveSales(sales))
    });

export const fetchSale = id => dispatch =>
  axios
    .get(`http://localhost:8000/sales/${id}`)
    .then(res => res.data)
    .then(sale => {
      // console.log('SOY SALE EN EL ACTION', sale)
      dispatch(receiveSale(sale))
    })


export const editSaleStatus = (saleId, reqbody) => dispatch => {
  // console.log('SOY EL ID Y EL REQBODY DE ACTIONS EDIT DE BOOK', bookId, reqbody)
  return axios.put(`http://localhost:8000/sales/edit_status/${saleId}`, reqbody)
    .then(res => res.data)
    .then(sales => {
      dispatch(receiveSales(sales))
    })
}