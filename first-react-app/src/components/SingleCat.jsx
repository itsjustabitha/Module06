// SingleCat.jsx - Exercise 02 Slide 47

function SingleCat({ name, latinName, imageUrl }) {
  return (
    <li>
      <img src={imageUrl} alt={name} width="100" height="100" />
      <strong>{name}</strong> — <em>{latinName}</em>
    </li>
  )
}

export default SingleCat