import Color from "../core/color";


interface ISPDefaultColors {
    Background: Color;
    TextColor: Color;
    MainGreen: Color;
    SecondaryGreen: Color;
    Button: Color;
    GreyBackground: Color;
}

export class SPDefaults {
    
    static Colors: ISPDefaultColors = {
        Background: Color.HexToColor("#f3f3f3"),
        TextColor: Color.HexToColor("#5c5c5c"),
        MainGreen: Color.HexToColor("#5c881a"),
        SecondaryGreen: Color.HexToColor("#edf1e9"),
        Button: Color.HexToColor("#ff5a00"),
        GreyBackground: Color.HexToColor("#f5f4f5")
    };

}