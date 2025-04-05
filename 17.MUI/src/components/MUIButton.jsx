import React from "react";
import { Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <Button variant='text'>Submit</Button>

                <Button variant='contained'>Submit</Button>

                <Button variant='outlined'>Submit</Button>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <Button variant='text' color='success'>
                    Submit
                </Button>

                <Button variant='contained' color='error'>
                    Submit
                </Button>

                <Button variant='outlined' color='secondary'>
                    Submit
                </Button>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <Button variant='contained' color='secondary' size='small'>
                    Submit
                </Button>

                <Button variant='contained' color='secondary' size='medium'>
                    Submit
                </Button>

                <Button variant='contained' color='secondary' size='large'>
                    Submit
                </Button>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <Button
                    variant='contained'
                    color='success'
                    size='medium'
                    endIcon={<GetAppIcon />}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default MUIButton;
