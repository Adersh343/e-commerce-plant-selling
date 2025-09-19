import plant1 from '../../assets/images/1.svg'
import plant2 from '../../assets/images/2.svg'
import plant3 from '../../assets/images/3.svg'
import plant4 from '../../assets/images/4.svg'
import CustomHeading from '../CustomHeading'

const ShopPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-primary  text-center  text-4xl font-bold pt-32">
             <CustomHeading title={"Shop By Category"}/>

        </div>
        <div className="flex pt-13  justify-around">
            <div >
           <img src={plant1} width={183}  height={206}/>
            </div>
            <div >
            <img src={plant2}   width={183}  height={206} />
1
            </div>
            <div >
            <img src={plant3}   width={183}  height={206}/>

            </div>
            <div>
            <img src={plant4}   width={183}  height={206}/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
