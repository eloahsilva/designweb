tailwind.config = {
    theme: {
        extend: {
            fontfamily : {
                'sans' : ['Inter', 'system-ui', 'sans-serif'],
            },
            colors : {
                //text-ifrn-green
                //text-ifrn-red
                'ifrn' : {
                    'green' : {
                        50 : '#f4faf3',
                        100 : '#e4f4e4',
                        200 : '#cae8ca',
                        300 : '#a2d4a1',
                        400 : '#6cb66c',
                        500 : '#4c9b4c',
                        600 : '#3a7f3b',
                        700 : '#306531',
                        800 : '#2a512b', 
                        900 : '#1d381b',
                        950 : '#0f250e'
                    },
                    'red' : {
                        50 : '#fef4f2',
                        100 : '#ffe6e1',
                        200 : '#ffd2c8',
                        300 : '#ffbeb0',
                        400 : '#fd866c',
                        500 : '#f55e3e',
                        600 : '#e24220',
                        700 : '#be3517',
                        800 : '#9d2f17', 
                        900 : '#822c1a',
                        950 : '#471308'      
                    }
                }
            }
        }
    }
}