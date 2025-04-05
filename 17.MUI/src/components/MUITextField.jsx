import { TextField } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MUITextField() {
    return (
        <div>
            <div style={{ marginBottom: "30px" }}>
                <TextField
                    id='outlined-basic'
                    label='Outlined'
                    variant='outlined'
                />
                <TextField id='filled-basic' label='Filled' variant='filled' />
                <TextField
                    id='standard-basic'
                    label='Standard'
                    variant='standard'
                />
            </div>

            <div style={{ marginBottom: "30px" }}>
                <TextField
                    id='outlined-basic'
                    label='Outlined'
                    variant='outlined'
                    color='success'
                    helperText='Enter your name'
                />
            </div>

            <div style={{ marginBottom: "30px" }}>
                <TextField
                    id='outlined-basic'
                    label='Outlined'
                    variant='outlined'
                    color='success'
                    disabled
                />
            </div>

            <div style={{ marginBottom: "30px" }}>
                <TextField
                    id='outlined-basic'
                    label='Outlined'
                    variant='filled'
                    color='info'
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default MUITextField;
