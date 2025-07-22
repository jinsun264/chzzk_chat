import React, { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';

function ColorPickerField({ label, color, onChange, disabled }) {
    const [showPicker, setShowPicker] = useState(false);

    const boxStyle = {
        width: '32px',
        height: '20px',
        border: '1px solid #ccc',
        display: 'inline-block',
        marginLeft: '8px',
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        cursor: 'pointer',
        verticalAlign: 'middle'
    };

    function rgbaToCss({ r, g, b, a }) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

    return (
        <div className='color_picker'>
            <label>{label}:
                <span
                    style={{ ...boxStyle, backgroundColor: rgbaToCss(color), opacity: disabled ? 0.3 : 1 }}
                    onClick={() => !disabled && setShowPicker(!showPicker)}
                />
                {showPicker && !disabled && (
                <div style={{ marginTop: '8px' }}>
                    <RgbaColorPicker color={color} onChange={onChange} />
                </div>
            )}
            </label>
            
        </div>
    );
}

export default ColorPickerField;