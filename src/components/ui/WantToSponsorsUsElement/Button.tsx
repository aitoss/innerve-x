export default function WTSUButton() {
    return (
        <div 
            className="mx-auto" 
            style={{ 
                padding: 24, 
                background: 'white', 
                borderRadius: 16, 
                outline: '3px #B37700 solid', 
                outlineOffset: '-3px'
            }}
        >
            <div className="flex gap-6">
                {/* Fill The Form Button */}
                <div 
                    style={{ 
                        width: 312.87, 
                        borderRadius: 14.06, 
                        outline: '3.52px black solid'
                    }}
                >
                    <div 
                        style={{ 
                            paddingTop: 7.03, 
                            paddingBottom: 21.09, 
                            paddingLeft: 3.52, 
                            paddingRight: 3.52, 
                            background: 'linear-gradient(180deg, #99D54F 0%, #6CBD34 100%)', 
                            borderRadius: 14.06, 
                            outline: '2.64px white solid', 
                            outlineOffset: '-2.64px'
                        }}
                    >
                        <div 
                            style={{ 
                                paddingTop: 17.58, 
                                paddingBottom: 3.52,  
                                background: 'rgba(186, 234, 99, 0.50)', 
                                borderRadius: 14.06
                            }} 
                            className="flex justify-center items-end"
                        >
                            <div 
                                style={{ 
                                    color: 'white', 
                                    fontSize: 30, 
                                    fontWeight: '300', 
                                    textShadow: '0px 3px 0px rgba(0, 0, 0, 1.00)' 
                                }}
                                className="text-stroke-black"   
                            >
                                Fill The Form
                            </div>
                        </div>
                    </div>
                </div>

                {/* Make a Payment Button */}
                <div 
                    style={{ 
                        width: 312.87, 
                        borderRadius: 14.06, 
                        outline: '3.52px black solid'
                    }}
                >
                    <div 
                        style={{ 
                            paddingTop: 7.03, 
                            paddingBottom: 21.09, 
                            paddingLeft: 3.52, 
                            paddingRight: 3.52, 
                            background: 'linear-gradient(180deg, #99D54F 0%, #6CBD34 100%)', 
                            borderRadius: 14.06, 
                            outline: '2.64px white solid', 
                            outlineOffset: '-2.64px'
                        }}
                    >
                        <div 
                            style={{ 
                                paddingTop: 17.58, 
                                paddingBottom: 3.52, 
                                background: 'rgba(186, 234, 99, 0.50)', 
                                borderRadius: 14.06
                            }} 
                            className="flex justify-center items-end"
                        >
                            <div 
                                style={{ 
                                    color: 'white', 
                                    fontSize: 30, 
                                    fontWeight: '400', 
                                    textShadow: '0px 3px 0px rgba(0, 0, 0, 1.00)' 
                                }}
                                className="text-stroke-black"
                            >
                                Make a Payment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}