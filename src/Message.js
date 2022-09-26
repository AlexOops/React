import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

function Message({author, text}) {
    return (
        <div className="msg-text">
            <Card>
                <CardContent>
                    <Typography variant="subtitle2" color="primary">{author}  </Typography>
                    <Typography variant="body2"  color="primary">{text}  </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Message;