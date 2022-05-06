

interface Prop {
    children: any
}

export const LayoutDark = ({children}:Prop) => {

    return (

        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding:'10px'
        }}>

            <h3>Dark Layout</h3>
            <hr />

            <div>
                {
                    children
                }
            </div>

        </div>

    )

};




