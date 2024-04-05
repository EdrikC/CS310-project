const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) =>  {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe)
    {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  //These are the 3 shoe pictures on the website.
  //If you wrap className in curly braces, you can pass logic to it.
  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImg === imgURL.bigShoe
        ? `border-indigo-500`
        : `border-transparent`
      } cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
        src={imgURL.bigShoe}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain" />
      </div>
    </div>
  )
}

export default ShoeCard