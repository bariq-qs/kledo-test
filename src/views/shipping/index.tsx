import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShippingCompsFn } from "api/shippingCompsApi";
import { useState } from "react";
import { debounce } from "lodash";

interface IShippingComps {
  id: number;
  name: string;
}

const Shipping = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debounceSearch = debounce(setSearch, 500)
  const {  data: shippingComps } = useQuery(
    ["shippingComps", search],
    () => {
      return getShippingCompsFn(search);
    },
    {
      select: (data) => data.data as IShippingComps[],
    }
  );
  return (
    <div className='card'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <div className='title'>Shipping Comps</div>
          <button
            className='btn-primary !rounded-full !p-0 w-8 h-8'
            onClick={() => navigate("/admin/shipping/form")}
          >
            +
          </button>
        </div>
        <input className='input-primary' placeholder='Cari...' value={search} onChange={(e: any) => setSearch(e.target.value)} />
      </div>
      <table className='mt-10 w-full'>
        <thead>
          <tr>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {shippingComps &&
            shippingComps.map((shipping: IShippingComps) => (
              <tr key={shipping.id}>
                <td><Link to={`/admin/shipping/form/${shipping.id}?name=${shipping.name}`}>{shipping.name}</Link></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipping;
