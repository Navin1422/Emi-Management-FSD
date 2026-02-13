# FinTech EMI Management System

A modern, responsive React application for managing and tracking EMI (Equated Monthly Installment) loans with real-time calculations, visual analytics, and multi-page navigation.

## Features

### 📊 Dashboard Page
- Overview of all loans at a glance
- Total monthly EMI burden across all loans
- Total outstanding amount
- Number of active loans
- Recent loans quick view
- Beautiful gradient cards with icons

### 🧮 Calculator Page
- Calculate EMI using the reducing balance formula
- Input principal amount, interest rate, and tenure
- Real-time EMI calculation with interest breakdown
- Add calculated loans directly to your portfolio
- Educational content about EMI calculation
- Tips for better EMI management

### 📋 My Loans Page
- View all loans in card format
- Track remaining balance for each loan
- Progress indicator showing paid vs remaining months
- Delete loans with one click
- Quick add loan button
- Responsive grid layout

### 📈 Analytics Page
- Interactive pie chart showing principal vs interest breakdown
- Total principal, interest, and payable amounts
- Payment status with progress tracking
- Detailed loan-wise breakdown table
- Visual representation of payment completion

### 💾 Data Persistence
- Automatic localStorage integration
- Data persists across browser sessions
- No backend required

## Tech Stack

- **React 19.2.4** - UI framework with functional components
- **React Router DOM** - Client-side routing for multi-page navigation
- **React Hooks** - useState, useEffect for state management
- **Recharts** - Data visualization library
- **CSS3** - Modern styling with gradients and animations
- **localStorage** - Client-side data persistence

## Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Navigation bar with routing
│   ├── Navigation.css
│   ├── EMICalculator.js       # EMI calculation and form
│   ├── EMICalculator.css
│   ├── EMIDashboard.js        # Summary statistics cards
│   ├── EMIDashboard.css
│   ├── EMIList.js             # Loan cards display
│   ├── EMIList.css
│   ├── EMIChart.js            # Principal vs Interest chart
│   └── EMIChart.css
├── pages/
│   ├── DashboardPage.js       # Dashboard overview page
│   ├── DashboardPage.css
│   ├── CalculatorPage.js      # EMI calculator page
│   ├── CalculatorPage.css
│   ├── LoansPage.js           # All loans listing page
│   ├── LoansPage.css
│   ├── AnalyticsPage.js       # Analytics and insights page
│   └── AnalyticsPage.css
├── utils/
│   └── emiCalculator.js       # EMI calculation formulas
├── App.js                     # Main app with routing
├── App.css                    # Main app styles
├── index.js                   # Application entry point
└── index.css                  # Global styles
```

## Installation & Setup

1. Navigate to the project directory:
```bash
cd emiwebapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Navigation

The application has 4 main pages accessible via the navigation bar:

1. **Dashboard (/)** - Overview and recent loans
2. **Calculator (/calculator)** - Calculate and add new EMIs
3. **My Loans (/loans)** - View and manage all loans
4. **Analytics (/analytics)** - Detailed insights and breakdowns

## EMI Calculation Formula

The application uses the reducing balance method:

```
EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)

Where:
P = Principal loan amount
r = Monthly interest rate (Annual Rate / 12 / 100)
n = Loan tenure in months
```

## Usage Guide

### Adding a Loan
1. Navigate to **Calculator** page
2. Enter loan details (name, principal, rate, tenure)
3. Click **Calculate EMI** to see the monthly payment
4. Click **Add to Dashboard** to save the loan
5. You'll be redirected to **My Loans** page

### Viewing Dashboard
1. Navigate to **Dashboard** page
2. See summary cards with key metrics
3. View your 3 most recent loans
4. Quick overview of your loan portfolio

### Managing Loans
1. Navigate to **My Loans** page
2. View all loans in card format
3. See detailed information for each loan
4. Click **×** button to delete a loan
5. Click **+ Add New Loan** to add more

### Analyzing Data
1. Navigate to **Analytics** page
2. View total principal, interest, and payable amounts
3. See pie chart breakdown
4. Check payment status and progress
5. Review loan-wise breakdown table

## Features Breakdown

### Navigation Component
- Sticky navigation bar
- Active page highlighting
- Responsive mobile menu
- Icon-based navigation

### Dashboard Page
- Summary statistics cards
- Recent loans preview
- Empty state for new users
- Quick insights

### Calculator Page
- EMI calculation form
- Formula explanation
- EMI management tips
- Auto-redirect after adding loan

### Loans Page
- Grid layout of loan cards
- Progress tracking
- Quick add button
- Delete functionality

### Analytics Page
- Multiple data visualizations
- Payment status tracking
- Detailed breakdown table
- Comprehensive insights

## Responsive Design

- **Desktop**: Full navigation with multi-column layouts
- **Tablet**: Adjusted grid layouts for medium screens
- **Mobile**: Single column layout with stacked navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Payment history tracking
- Export data to CSV/PDF
- Multiple currency support
- Loan comparison feature
- Email reminders for payments
- Dark mode theme
- User authentication
- Cloud sync

## License

MIT License - feel free to use this project for learning or commercial purposes.
