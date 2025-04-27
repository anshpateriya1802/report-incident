# AI Safety Incident Dashboard

A responsive Next.js application for reporting, tracking, and analyzing safety incidents. This dashboard provides a sleek, modern interface for incident management with real-time updates and filtering capabilities.

![AI Safety Incident Dashboard](https://via.placeholder.com/800x400?text=AI+Safety+Incident+Dashboard)

## Features

- **Incident Tracking**: Report new incidents with title, description, and severity levels
- **Analytics Dashboard**: Visual representation of incident severity distribution
- **Search Functionality**: Quickly find incidents with the responsive search bar
- **Filtering & Sorting**: Filter incidents by severity and sort by date
- **Detailed Views**: Examine incident details on dedicated pages
- **Mobile Responsive**: Fully optimized for desktop and mobile devices
- **Dark Mode**: Modern dark theme for reduced eye strain

## Tech Stack

- **Framework**: [Next.js 15.3.1](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Font**: Geist (Vercel's font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/report-incident.git
   cd report-incident
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── incident/[id]/      # Dynamic incident detail pages
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── Analytics.tsx       # Incident analytics dashboard
│   ├── Context.tsx         # Global state management
│   ├── Dashboard.tsx       # Main dashboard layout
│   ├── Filters.tsx         # Incident filtering components
│   ├── IncidentForm.tsx    # Form for creating new incidents
│   ├── IncidentTable.tsx   # Table listing all incidents
│   ├── Navbar.tsx          # Navigation bar with search
│   ├── Pagination.tsx      # Pagination for incident table
│   └── SearchBar.tsx       # Search functionality
├── data/                   # Mock data and data utilities
│   └── mock_data.json      # Sample incident data
└── public/                 # Static assets
```

## Key Features Implementation

- **Incident Context**: Global state management for incidents using React Context API
- **Hydration Safety**: Component design prevents hydration errors between server and client rendering
- **Responsive Navigation**: Adaptive navbar with mobile-optimized search toggle
- **Analytics**: Real-time count visualization of incidents by severity
- **Progressive Enhancement**: App works with or without JavaScript enabled

## Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/report-incident)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling system
- Vercel for the Geist font and hosting platform
