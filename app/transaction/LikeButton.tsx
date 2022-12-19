'use client'

import Button from '@mui/material/Button';
import { useState } from "react"

export function LikeButton({ id }) {
    const [liked, setLiked] = useState(false)

    return(
        <Button variant="contained" onClick={() => setLiked(!liked)}>
            {liked ? '♠' : '♦'}
        </Button>
    )
}