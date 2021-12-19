import { useState } from 'react';
const UseState = () => {
  // 1. counter
  // let [itung,setItung]=useState(0);
  // return(
  //     <>
  //     <button onClick={()=>setItung(itung-1)}>-</button>
  //     <span> {itung} </span>
  //     <button onClick={()=>setItung(itung+1)}>+</button>
  //     </>
  // )
  // 2. ganti nama
  let jeneng = ['cindil', 'joko', 'Dandi'];
  let [nama, setNama] = useState(jeneng[0]);
  console.log(nama);

  return (
    <>
      <button onClick={() => setNama(jeneng[1])}>Ganti Nama</button>
      <span> {nama}</span>
    </>
  );
};
export default UseState;
// penjelasan useState:
// jadi yg aku tangkep adalah useState itu untuk update data
// per de-construct dulu objectnya. useState terdiri dari state dan setState
// useState mengenalkan nilai defaultnya baik itu "string",[array], atau digit yang disimpan dalam kurung
// kemudian state itu variabel buat penanda apa yg bakal diubah
// sedangkan setState itu hasil update nya.
// let/const/var [state,setState]=useState() ========> diatas return
// tambahan: buat hook menggunakan komponen function.
