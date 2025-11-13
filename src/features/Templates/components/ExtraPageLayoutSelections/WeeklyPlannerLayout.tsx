import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';



const weekDays = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export default function WeeklyPlannerLayout() {
  return (
     <Box key='food-layout-twelve' sx={{ display: 'flex' }}>
           {/* First half */}
           <Box
             sx={{
               width: 794,
               height: 1123,
               p: 5,
               pr: 15,
               bgcolor: '#fff',
               position: 'relative',
             }}
           >
             <Typography
               sx={{
                 fontFamily: "'Playfair Display', serif",
                 fontSize: '2.5rem',
                 fontWeight: 700,
                 color: '#2d2d2d',
                 mb: 4,
                 textAlign: 'center',
               }}
             >
               WEEKLY PLANNER
             </Typography>
     
             {/* Days grid */}
             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
               {weekDays.map((day, idx) => (
                 <Box
                   key={day}
                   sx={{
                     display: 'flex',
                     alignItems: 'center',
                     borderBottom: '1px solid #e0e0e0',
                     pb: 2.5,
                   }}
                 >
                   <Box sx={{ width: '30%', pr: 2 }}>
                     <Typography
                       sx={{
                         fontFamily: "'Playfair Display', serif",
                         fontSize: '0.95rem',
                         fontWeight: 600,
                         color: '#2d2d2d',
                       }}
                     >
                       {day}
                     </Typography>
                   </Box>
                   <Box
                     sx={{
                       flex: 1,
                       height: '70px',
                       borderBottom: '1px dotted #ccc',
                     }}
                   />
                 </Box>
               ))}
             </Box>
     
             {/* Decorative element */}
             <Box
               sx={{
                 mt: 4,
                 pt: 3,
                 borderTop: '2px solid #8B7355',
                 textAlign: 'center',
               }}
             >
               <Typography
                 sx={{
                   fontFamily: "'Dancing Script', cursive",
                   fontSize: '1.3rem',
                   color: '#8B7355',
                 }}
               >
                 Plan your meals with love
               </Typography>
             </Box>
     
             <Box
               sx={{
                 position: 'absolute',
                 bottom: 20,
                 left: '50%',
                 transform: 'translateX(-50%)',
                 width: 40,
                 height: 40,
                 border: '2px solid #8B7355',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
               }}
             >
               <Box
                 sx={{
                   width: 8,
                   height: 8,
                   bgcolor: '#8B7355',
                   borderRadius: '50%',
                 }}
               />
             </Box>
           </Box>
     
           {/* second half */}
           <Box
             sx={{
               width: 794,
               height: 1123,
               p: 5,
               pl: 15,
               bgcolor: '#f5f5f5',
               position: 'relative',
             }}
           >
             <Typography
               sx={{
                 fontFamily: "'Playfair Display', serif",
                 fontSize: '2.5rem',
                 fontWeight: 700,
                 color: '#2d2d2d',
                 mb: 4,
                 textAlign: 'center',
               }}
             >
               WEEKLY PLANNER
             </Typography>
     
             {/* Lined paper effect */}
             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
               {Array.from({ length: 35 }).map((_, idx) => (
                 <Box
                   key={idx}
                   sx={{
                     width: '100%',
                     height: '1px',
                     bgcolor: '#e0e0e0',
                     position: 'relative',
                   }}
                 >
                   {/* Small decorative circle on left */}
                   <Box
                     sx={{
                       position: 'absolute',
                       left: -12,
                       top: '50%',
                       transform: 'translateY(-50%)',
                       width: 6,
                       height: 6,
                       bgcolor: '#8B7355',
                       borderRadius: '50%',
                     }}
                   />
                 </Box>
               ))}
             </Box>
     
             {/* Bottom decorative quote */}
             <Box
               sx={{
                 position: 'absolute',
                 bottom: 60,
                 left: 0,
                 right: 0,
                 textAlign: 'center',
               }}
             >
               <Typography
                 sx={{
                   fontFamily: "'Lato', sans-serif",
                   fontSize: '0.9rem',
                   color: '#999',
                   fontStyle: 'italic',
                 }}
               >
                 "Cooking is an act of love, a gift, a way of sharing with others"
               </Typography>
             </Box>
     
             <Box
               sx={{
                 position: 'absolute',
                 bottom: 20,
                 left: '50%',
                 transform: 'translateX(-50%)',
                 width: 40,
                 height: 40,
                 border: '2px solid #8B7355',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
               }}
             >
               <Box
                 sx={{
                   width: 8,
                   height: 8,
                   bgcolor: '#8B7355',
                   borderRadius: '50%',
                 }}
               />
             </Box>
           </Box>
         </Box>
  );
}
