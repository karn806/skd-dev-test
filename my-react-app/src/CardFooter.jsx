/* eslint-disable react/prop-types */
import IconButton from "@mui/material/IconButton";
import IosShareIcon from '@mui/icons-material/IosShare';
import PersonIcon from '@mui/icons-material/Person';

function CardFooter(props) {
    return (
        <div className="content-left-right">
            <div className="content-left">
                <PersonIcon/>
                <p className="card-footer-text">{props.likes} คนที่สนใจ</p>
            </div>
            <div className="content-right">
                <p>
                    <IconButton color="primary" aria-label="add">
                        <IosShareIcon />
                    </IconButton>
                </p>
            </div>
        </div>
    );
}

export default CardFooter