import PropTypes from 'prop-types'

const Feature = ({props}) => {
    return (
        <div className='text-left'>
              <li>{props}</li> 
        </div>
    );
};
Feature.propTypes = {
    props: PropTypes.string
}
export default Feature;