import Image from "next/image";
import TrackButtonImage from "../../../assets/webp/tracks/tracks heading.webp"

export default function TrackButton() {
    return (
        <>
            {/* <div style={{ width: 703, height: 184, position: 'relative', overflow: 'hidden' }} className="">
                <div style={{ width: 703, height: 178, left: 0, top: 1, position: 'absolute', background: 'linear-gradient(180deg, #FFC52C 0%, #DA8617 50%, #FFC62A 50%, #D56E10 100%)', boxShadow: '0px 4.5997819900512695px 0px #A60000', border: '6.13px #FFF6AE solid' }} />
                <div style={{ width: 654.70, height: 139.53, left: 24.53, top: 19.74, position: 'absolute', outline: '7.67px #FFDAAA solid', outlineOffset: '-3.83px' }} />
                <div style={{ width: 620.90, height: 184.21, left: 47.57, top: 0.99, position: 'absolute', overflow: 'hidden' }}>
                    <div style={{ width: 604.23, height: 184.21, left: 1.59, top: -0.35, position: 'absolute', background: 'linear-gradient(180deg, #E3B9F9 0%, #B164DF 9%, #800FC4 50%, #6412A5 50%, #4E0B81 100%)' }} />
                    <div style={{ width: 570.09, height: 161.97, left: 17.47, top: 11.12, position: 'absolute', background: 'linear-gradient(180deg, #8A12D4 0%, #6700B0 50%, #6900B2 67%, #8512D0 100%)' }} />
                    <div className="" style={{ width: 530.39, height: 134.98, left: 38.11, top: 23.82, position: 'absolute', outline: '6.23px #500089 solid', outlineOffset: '-3.11px' }} />
                    <div className="clip-hex" style={{ padding: 15.88, left: 154.07, top: 44.22, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 15.88, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Clash', fontWeight: '400', wordWrap: 'break-word', textShadow: '0px 4px 0px rgba(0, 0, 0, 1.00)' }}>TRACKS</div>
                    </div>
                </div>
            </div> */}
            <div className="mb-16 min-w-[310px] z-20" >
                <Image src={TrackButtonImage} alt="Track button Img" draggable={false}/>
            </div>
        </>
    )
}