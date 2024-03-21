
import Option from "./Option";

const PriceOptions = () => {

    const packages = [
        {
          "id": "001",
          "name": "Standard Package",
          "price": 99.99,
          "features": [
            "Basic features included",
            "24/7 customer support",
            "Access to online tutorials",
            "Monthly webinars",
            "Email assistance"
          ]
        },
        {
          "id": "002",
          "name": "Premium Package",
          "price": 149.99,
          "features": [
            "Advanced features included",
            "Personalized assistance",
            "Priority support",
            "Dedicated account manager",
            "Customized solutions",
            "Exclusive access to workshops"
          ]
        },
        {
          "id": "003",
          "name": "Enterprise Package",
          "price": 199.99,
          "features": [
            "Premium features included",
            "Dedicated support hotline",
            "On-site training sessions",
            "Tailored analytics reports",
            "24/7 emergency support",
            "Quarterly strategy consultations"
          ]
        }
      ]
      
    return (
        <div className="flex justify-center flex-wrap gap-20 text-center">
            {
                packages.map(option=> <Option key={option.id} option={option}></Option>)
            }
        </div>
    );
};

export default PriceOptions;