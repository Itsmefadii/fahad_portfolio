import './card.css'

export default function Card(props){
return(
    <div className="main-card-div">
        <h1 className="card-main-heading">{props.projName}</h1>
        <p className="card-description">{props.projDesc}</p>
        <a href={props.projRepo} className="card-anchor">{props.anchorText}</a>
    </div>
)
}