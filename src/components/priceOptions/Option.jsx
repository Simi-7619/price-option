import PropTypes from 'prop-types'
import Feature from './Feature';
const Option = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='space-y-3 shadow-xl pt-12 flex flex-col'>
            <h2 className='bg-green-500 p-3 text-white font-bold text-2xl'>{name}</h2>
            <h1>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl'>/month</span>
            </h1>
            <br />
            <hr />
            <div className='px-12 flex-grow py-6 '>
                {
                    features.map((feature, index) => <Feature key={index} props={feature}></Feature>)
                }
            </div>
             
            <button className="btn btn-success  bg-green-500 rounded-none text-white font-bold">Buy Now</button>

        </div>
    );
};

Option.propTypes ={
    option: PropTypes.object
}
export default Option;