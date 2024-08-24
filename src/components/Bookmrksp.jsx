import PropTypes from "prop-types"

const Bookmrksp = ({bookmark}) => {

    const {title}=bookmark;
    return (
        <div className="bg-slate-400 p-4 m-4 rounded-xl">
            <h3>{title}</h3>
        </div>
    );
};

Bookmrksp.proptypes={
    bookmark: PropTypes.object,
}

export default Bookmrksp;