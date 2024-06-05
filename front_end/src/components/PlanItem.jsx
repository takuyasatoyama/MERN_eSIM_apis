

export default (props) => {
const {title,subTitle,value,subValue} = props;
    return (
        <div className="flex items-center rounded-lg border-1 border-black justify-between p-1 mb-2">
            <div className="flex flex-col">
                <p className="m-0">{title}</p>
                <h1 className="pr-20 border-r-[1px] border-gray-900 m-0">{value}</h1>
            </div>
            <div className="flex flex-col">
                <p className="m-0">{subTitle}</p>
                <h1 className="m-0">{subValue}</h1>
            </div>
        </div>
    );
}