import React from 'react'

const ConditionalRenderDriver = ({ idade }) => {
    return (
        <>
            {
                idade >= 18 ? (
                    <p>Esta pessoa pode dirigir.</p>
                ) : (
                    <p>Esta pessoa não pode dirigir.</p>
                )
            }
        </>
    )
}

export default ConditionalRenderDriver