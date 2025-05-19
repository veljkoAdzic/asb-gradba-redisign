import "./SideBar.css"

export default function SideBar(props) {
    const TABS = ["Проекти", "Пораки", "Финанции", "Корисник"];
    return (
        <div id="sidebar">
            {
                TABS.map( (title, i) => {
                    return (<button onClick={ () => {props.onTabChange(i) }}  className={`tab  ${i==props.selectedTab ? " here" : ""}` } >
                        {title}
                    </button>);
                })
            }
        </div>
    );
}