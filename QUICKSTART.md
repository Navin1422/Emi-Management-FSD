# Quick Start Guide

## 🚀 Getting Started

### Start the Application
```bash
cd emiwebapp
npm start
```

The app will open at `http://localhost:3000`

## 📱 Application Pages

### 1. Dashboard (Home Page)
**Route:** `/`
- View summary of all loans
- See total monthly EMI, outstanding amount, and active loans count
- Quick view of recent loans
- **First time?** The page will show an empty state prompting you to add loans

### 2. Calculator Page
**Route:** `/calculator`
- **Add a new loan:**
  1. Enter loan name (e.g., "Home Loan")
  2. Enter principal amount (e.g., 500000)
  3. Enter annual interest rate (e.g., 8.5)
  4. Enter tenure in months (e.g., 60)
  5. Click "Calculate EMI"
  6. Review the EMI amount and total interest
  7. Click "Add to Dashboard"
  8. You'll be redirected to My Loans page

- **Learn about EMI:**
  - Formula explanation on the right side
  - Tips for better EMI management

### 3. My Loans Page
**Route:** `/loans`
- View all your loans in card format
- Each card shows:
  - Loan name and monthly EMI
  - Principal, interest rate, and tenure
  - Remaining balance
  - Total interest
  - Progress bar (paid vs remaining months)
- **Delete a loan:** Click the × button on any card
- **Add new loan:** Click "+ Add New Loan" button (redirects to Calculator)

### 4. Analytics Page
**Route:** `/analytics`
- **Summary Cards:**
  - Total Principal
  - Total Interest
  - Total Payable Amount
  
- **Pie Chart:**
  - Visual breakdown of Principal vs Interest
  - Interactive tooltips
  
- **Payment Status:**
  - Amount paid so far
  - Amount remaining
  - Progress percentage
  
- **Loan-wise Breakdown Table:**
  - Detailed view of each loan
  - Principal, Interest, Total, and EMI columns

## 💡 Tips

1. **Data Persistence:** All your loans are saved in browser localStorage
2. **Navigation:** Use the top navigation bar to switch between pages
3. **Active Page:** The current page is highlighted in the navigation
4. **Responsive:** Works on desktop, tablet, and mobile devices
5. **No Backend:** Everything runs in your browser

## 🎯 Example Workflow

1. **Start** → Open app (Dashboard page)
2. **Navigate** → Go to Calculator page
3. **Add Loan** → Enter details and calculate
4. **Save** → Add to dashboard
5. **View** → Check My Loans page
6. **Analyze** → Visit Analytics page for insights
7. **Manage** → Delete or add more loans as needed

## 🔧 Troubleshooting

- **Loans not showing?** Check if you've added any loans via Calculator
- **Data lost?** Don't clear browser cache/localStorage
- **Page not loading?** Ensure `npm start` is running
- **Styling issues?** Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

## 📊 Sample Data to Try

**Home Loan:**
- Principal: ₹5,000,000
- Rate: 8.5% p.a.
- Tenure: 240 months (20 years)

**Car Loan:**
- Principal: ₹800,000
- Rate: 10.5% p.a.
- Tenure: 60 months (5 years)

**Personal Loan:**
- Principal: ₹200,000
- Rate: 12% p.a.
- Tenure: 36 months (3 years)

Add these to see the full power of the analytics!
