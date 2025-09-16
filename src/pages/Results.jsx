
import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

const MotionTableRow = motion(TableRow);


const results = [
    { id: 1, term: 'Spring 2023', gradingPoints: 63.34, cumulativeGP: 63.34, cr: 19, totalCR: 19, sgpa: 3.33, cgpa: 3.33 },
    { id: 2, term: 'Fall 2023', gradingPoints: 52.32, cumulativeGP: 115.66, cr: 17, totalCR: 36, sgpa: 3.08, cgpa: 3.21 },
    { id: 3, term: 'Spring 2024', gradingPoints: 59.33, cumulativeGP: 174.99, cr: 16, totalCR: 52, sgpa: 3.71, cgpa: 3.37 },
    { id: 4, term: 'Fall 2024', gradingPoints: 61.25, cumulativeGP: 236.24, cr: 18, totalCR: 70, sgpa: 3.40, cgpa: 3.37 },
    { id: 5, term: 'Spring 2025', gradingPoints: 67.80, cumulativeGP: 303.95, cr: 20, totalCR: 90, sgpa: 3.39, cgpa: 3.38 },
    // Additional sample rows to reach ~15 entries
    { id: 6, term: 'Fall 2025', gradingPoints: 58.12, cumulativeGP: 362.07, cr: 17, totalCR: 107, sgpa: 3.42, cgpa: 3.39 },
    { id: 7, term: 'Spring 2026', gradingPoints: 62.50, cumulativeGP: 424.57, cr: 18, totalCR: 125, sgpa: 3.47, cgpa: 3.41 },
    { id: 8, term: 'Fall 2026', gradingPoints: 55.00, cumulativeGP: 479.57, cr: 16, totalCR: 141, sgpa: 3.44, cgpa: 3.40 },
    { id: 9, term: 'Spring 2027', gradingPoints: 60.25, cumulativeGP: 539.82, cr: 19, totalCR: 160, sgpa: 3.17, cgpa: 3.38 },
    { id: 10, term: 'Fall 2027', gradingPoints: 64.00, cumulativeGP: 603.82, cr: 20, totalCR: 180, sgpa: 3.20, cgpa: 3.39 },
    { id: 11, term: 'Spring 2028', gradingPoints: 66.40, cumulativeGP: 670.22, cr: 20, totalCR: 200, sgpa: 3.32, cgpa: 3.41 },
    { id: 12, term: 'Fall 2028', gradingPoints: 59.90, cumulativeGP: 730.12, cr: 18, totalCR: 218, sgpa: 3.33, cgpa: 3.42 },
    { id: 13, term: 'Spring 2029', gradingPoints: 61.10, cumulativeGP: 791.22, cr: 19, totalCR: 237, sgpa: 3.21, cgpa: 3.41 },
    { id: 14, term: 'Fall 2029', gradingPoints: 57.75, cumulativeGP: 848.97, cr: 17, totalCR: 254, sgpa: 3.40, cgpa: 3.42 },
    { id: 15, term: 'Spring 2030', gradingPoints: 63.00, cumulativeGP: 911.97, cr: 19, totalCR: 273, sgpa: 3.32, cgpa: 3.42 },
];

const Results = () => {

    const [query, setQuery] = React.useState('');
    const [termFilter, setTermFilter] = useState("All Terms");

    const normalizedQuery = query.trim().toLowerCase();

    const filteredResults = results.filter((r) => {
        // Term filter
        if (termFilter !== 'All Terms') {
            const t = termFilter.toLowerCase();
            if (!r.term.toLowerCase().includes(t)) return false;
        }

        if (!normalizedQuery) return true;

        // search against id, term, sgpa, cgpa
        const byId = String(r.id) === normalizedQuery || String(r.id).includes(normalizedQuery);
        const byTerm = r.term.toLowerCase().includes(normalizedQuery);
        const bySgpa = String(r.sgpa).toLowerCase().includes(normalizedQuery);
        const byCgpa = String(r.cgpa).toLowerCase().includes(normalizedQuery);
        return byId || byTerm || bySgpa || byCgpa;
    });

    return (
        <div>
            {/* Filter bar (search + dropdown) - styled simple, similar layout to the provided screenshot */}
            <div className="mb-4 p-4 bg-white rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                    <input
                        aria-label="Search results"
                        placeholder="Search by term, ID, SGPA, or CGPA..."
                        className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className="w-48">
                    <CustomDropdown
                        options={["All Terms", "Spring", "Fall"]}
                        value={termFilter}
                        onChange={setTermFilter}
                    />
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-[var(--borderColor)] px-5!'>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>ID</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>Term</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>Grading Points</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>Cumulative GP</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>CR</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>Total CR</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>SGPA</TableCell>
                            <TableCell className='text-center font-semibold! text-[var(--green)]!'>CGPA</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredResults.map((row, i) => (
                            <MotionTableRow
                                key={row.id}
                                className=' px-5!'
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04 }}
                                whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.03)' }}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.term}</TableCell>
                                <TableCell>{row.gradingPoints.toFixed(2)}</TableCell>
                                <TableCell>{row.cumulativeGP.toFixed(2)}</TableCell>
                                <TableCell>{row.cr}</TableCell>
                                <TableCell>{row.totalCR}</TableCell>
                                <TableCell>{row.sgpa.toFixed(2)}</TableCell>
                                <TableCell>{row.cgpa.toFixed(2)}</TableCell>
                            </MotionTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
export default Results;

function CustomDropdown({ options, value, onChange, label }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="relative w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            {/* Selected Value */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-white shadow-sm hover:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
            >
                <span>{value}</span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {/* Dropdown Options */}
            {open && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg">
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 cursor-pointer hover:bg-[var(--green)]/10 ${value === option ? "bg-[var(--green)]/5 font-semibold" : ""
                                }`}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}