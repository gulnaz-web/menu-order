export const Pizza = ({ item }) => {
   const { name, ingredients, photoName, price, soldOut } = item;
   const classNamePizza = soldOut ? 'pizza sold-out' : 'pizza';

   return (
      <li className={classNamePizza}>
         <img src={`images/${photoName}`} alt={name} />
         <div>
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <span>{soldOut ? 'SOLD OUT' : price}</span>
         </div>
      </li>
   );
};
