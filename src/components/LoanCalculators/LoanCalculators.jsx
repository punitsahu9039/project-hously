import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Slider } from '../../components/ui/slider';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '../../components/ui/toggle-group';
import { useIsMobile } from '../../hooks/use-mobile';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const LoanCalculators = () => {
  const [activeTab, setActiveTab] = useState('emi');
  const isMobile = useIsMobile();
  
  const [calculatorState, setCalculatorState] = useState({
    emi: {
      loanAmount: 2500000,
      interestRate: 8.5,
      tenure: 20,
      monthlyPayment: 0,
      totalInterest: 0,
      totalPayment: 0,
    },
    eligibility: {
      monthlyIncome: 100000,
      existingEmi: 10000,
      interestRate: 8.5,
      tenure: 20,
      eligibleAmount: 0,
    },
    foreclose: {
      loanAmount: 2500000,
      interestRate: 8.5,
      tenure: 20,
      elapsedMonths: 36,
      foreclosureAmount: 0,
      interestSaved: 0,
    },
    balanceTransfer: {
      outstandingAmount: 2500000,
      currentInterest: 10.5,
      newInterest: 8.5,
      tenure: 15,
      monthlySavings: 0,
      totalSavings: 0,
    },
    prePayment: {
      loanAmount: 2500000,
      interestRate: 8.5,
      tenure: 20,
      prepaymentAmount: 500000,
      newTenure: 0,
      interestSaved: 0,
    },
  });

  // EMI Calculator Logic
  useEffect(() => {
    const { loanAmount, interestRate, tenure } = calculatorState.emi;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const monthlyPayment = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - loanAmount;

    setCalculatorState(prev => ({
      ...prev,
      emi: {
        ...prev.emi,
        monthlyPayment,
        totalInterest,
        totalPayment,
      },
    }));
  }, [calculatorState.emi.loanAmount, calculatorState.emi.interestRate, calculatorState.emi.tenure]);

  // Eligibility Calculator Logic
  useEffect(() => {
    const { monthlyIncome, existingEmi, interestRate, tenure } = calculatorState.eligibility;
    const availableEmi = monthlyIncome * 0.5 - existingEmi;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const eligibleAmount = availableEmi * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));

    setCalculatorState(prev => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        eligibleAmount: Math.max(0, eligibleAmount),
      },
    }));
  }, [
    calculatorState.eligibility.monthlyIncome,
    calculatorState.eligibility.existingEmi,
    calculatorState.eligibility.interestRate,
    calculatorState.eligibility.tenure,
  ]);

  // Foreclosure Calculator Logic
  useEffect(() => {
    const { loanAmount, interestRate, tenure, elapsedMonths } = calculatorState.foreclose;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    
    const totalPayment = emi * n;
    const totalInterest = totalPayment - loanAmount;
    
    const outstandingPrincipal =
      loanAmount * (Math.pow(1 + r, n) - Math.pow(1 + r, elapsedMonths)) / (Math.pow(1 + r, n) - 1);
    
    const paidInterest = (emi * elapsedMonths) - (loanAmount - outstandingPrincipal);
    const interestSaved = totalInterest - paidInterest;

    setCalculatorState(prev => ({
      ...prev,
      foreclose: {
        ...prev.foreclose,
        foreclosureAmount: outstandingPrincipal,
        interestSaved,
      },
    }));
  }, [
    calculatorState.foreclose.loanAmount,
    calculatorState.foreclose.interestRate,
    calculatorState.foreclose.tenure,
    calculatorState.foreclose.elapsedMonths,
  ]);

  // Balance Transfer Calculator Logic
  useEffect(() => {
    const { outstandingAmount, currentInterest, newInterest, tenure } = calculatorState.balanceTransfer;
    
    const currentR = currentInterest / 12 / 100;
    const newR = newInterest / 12 / 100;
    const n = tenure * 12;
    
    const currentEMI = outstandingAmount * currentR * Math.pow(1 + currentR, n) / (Math.pow(1 + currentR, n) - 1);
    const newEMI = outstandingAmount * newR * Math.pow(1 + newR, n) / (Math.pow(1 + newR, n) - 1);
    
    const monthlySavings = currentEMI - newEMI;
    const totalSavings = monthlySavings * n;

    setCalculatorState(prev => ({
      ...prev,
      balanceTransfer: {
        ...prev.balanceTransfer,
        monthlySavings,
        totalSavings,
      },
    }));
  }, [
    calculatorState.balanceTransfer.outstandingAmount,
    calculatorState.balanceTransfer.currentInterest,
    calculatorState.balanceTransfer.newInterest,
    calculatorState.balanceTransfer.tenure,
  ]);

  // Pre-Payment Calculator Logic
  useEffect(() => {
    const { loanAmount, interestRate, tenure, prepaymentAmount } = calculatorState.prePayment;
    
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    
    const totalInterestWithoutPrepayment = (emi * n) - loanAmount;
    
    const reducedPrincipal = loanAmount - prepaymentAmount;
    const newTenureMonths = -Math.log(1 - (reducedPrincipal * r) / emi) / Math.log(1 + r);
    const newTenureYears = newTenureMonths / 12;
    
    const totalInterestWithPrepayment = (emi * newTenureMonths) - reducedPrincipal;
    const interestSaved = totalInterestWithoutPrepayment - totalInterestWithPrepayment;

    setCalculatorState(prev => ({
      ...prev,
      prePayment: {
        ...prev.prePayment,
        newTenure: newTenureYears,
        interestSaved,
      },
    }));
  }, [
    calculatorState.prePayment.loanAmount,
    calculatorState.prePayment.interestRate,
    calculatorState.prePayment.tenure,
    calculatorState.prePayment.prepaymentAmount,
  ]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const renderEMICalculator = () => {
    const { loanAmount, interestRate, tenure, monthlyPayment, totalInterest, totalPayment } = calculatorState.emi;
    
    const pieData = [
      { name: 'Principal', value: loanAmount },
      { name: 'Interest', value: totalInterest },
    ];
    
    const COLORS = ['#319795', '#F5BB14'];
    
    const chartHeight = isMobile ? 160 : 200;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8" style={{marginTop:"-10px"}}>
        <Card className="lg:col-span-2" >
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>EMI Calculator</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-4" : "space-y-8"}>
            <div >
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Loan Amount: {formatCurrency(loanAmount)}</label>
              </div>
              <Slider
                value={[loanAmount]}
                min={100000}
                max={10000000}
                step={100000}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    emi: {
                      ...prev.emi,
                      loanAmount: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Interest Rate: {interestRate}%</label>
              </div>
              <Slider
                value={[interestRate]}
                min={5}
                max={20}
                step={0.1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    emi: {
                      ...prev.emi,
                      interestRate: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Tenure: {tenure} years</label>
              </div>
              <Slider
                value={[tenure]}
                min={1}
                max={30}
                step={1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    emi: {
                      ...prev.emi,
                      tenure: values[0],
                    },
                  }));
                }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>Loan Summary</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-3" : "space-y-4"}>
            <div>
              <p className="text-sm text-gray-500">Monthly EMI</p>
              <p className="text-2xl font-bold text-teal-600">{formatCurrency(monthlyPayment)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Total Interest Payable</p>
              <p className="text-xl font-semibold text-gold-600">{formatCurrency(totalInterest)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-lg font-medium">{formatCurrency(totalPayment)}</p>
            </div>
            
            <div className={`h-[${chartHeight}px] mt-2`}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 40 : 60}
                    outerRadius={isMobile ? 60 : 80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderEligibilityCalculator = () => {
    const { monthlyIncome, existingEmi, interestRate, tenure, eligibleAmount } = calculatorState.eligibility;
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <Card className="lg:col-span-2">
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>Loan Eligibility Calculator</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-4" : "space-y-8"}>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Monthly Income: {formatCurrency(monthlyIncome)}</label>
              </div>
              <Slider
                value={[monthlyIncome]}
                min={25000}
                max={500000}
                step={5000}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    eligibility: {
                      ...prev.eligibility,
                      monthlyIncome: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Existing EMIs: {formatCurrency(existingEmi)}</label>
              </div>
              <Slider
                value={[existingEmi]}
                min={0}
                max={200000}
                step={1000}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    eligibility: {
                      ...prev.eligibility,
                      existingEmi: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Interest Rate: {interestRate}%</label>
              </div>
              <Slider
                value={[interestRate]}
                min={5}
                max={20}
                step={0.1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    eligibility: {
                      ...prev.eligibility,
                      interestRate: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Tenure: {tenure} years</label>
              </div>
              <Slider
                value={[tenure]}
                min={1}
                max={30}
                step={1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    eligibility: {
                      ...prev.eligibility,
                      tenure: values[0],
                    },
                  }));
                }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>Eligibility Summary</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-3" : "space-y-4"}>
            <div className={isMobile ? "text-center py-4" : "text-center py-6"}>
              <p className="text-sm text-gray-500 mb-2">You are eligible for a loan of</p>
              <p className="text-3xl font-bold text-teal-600">{formatCurrency(eligibleAmount)}</p>
            </div>
            
            <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
              <p className="text-sm text-gray-600">Based on:</p>
              <ul className="mt-1 lg:mt-2 space-y-1 text-sm">
                <li>• Monthly Income: {formatCurrency(monthlyIncome)}</li>
                <li>• Available for EMI (50%): {formatCurrency(monthlyIncome * 0.5)}</li>
                <li>• Existing EMIs: {formatCurrency(existingEmi)}</li>
                <li>• Interest Rate: {interestRate}%</li>
                <li>• Tenure: {tenure} years</li>
              </ul>
            </div>
            
            <Button className="w-full gradient-primary">Apply Now</Button>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  const renderForecloseCalculator = () => {
    const { loanAmount, interestRate, tenure, elapsedMonths, foreclosureAmount, interestSaved } = calculatorState.foreclose;
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Loan Foreclosure Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Loan Amount: {formatCurrency(loanAmount)}</label>
                </div>
                <Slider
                  value={[loanAmount]}
                  min={100000}
                  max={10000000}
                  step={100000}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      foreclose: {
                        ...prev.foreclose,
                        loanAmount: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Interest Rate: {interestRate}%</label>
                </div>
                <Slider
                  value={[interestRate]}
                  min={5}
                  max={20}
                  step={0.1}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      foreclose: {
                        ...prev.foreclose,
                        interestRate: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Total Tenure: {tenure} years</label>
                </div>
                <Slider
                  value={[tenure]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      foreclose: {
                        ...prev.foreclose,
                        tenure: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Elapsed Time: {Math.floor(elapsedMonths/12)} years {elapsedMonths%12} months</label>
                </div>
                <Slider
                  value={[elapsedMonths]}
                  min={1}
                  max={tenure * 12 - 1}
                  step={1}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      foreclose: {
                        ...prev.foreclose,
                        elapsedMonths: values[0],
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Foreclosure Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Foreclosure Amount</p>
                <p className="text-2xl font-bold text-teal-600">{formatCurrency(foreclosureAmount)}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Interest Saved</p>
                <p className="text-xl font-semibold text-green-600">{formatCurrency(interestSaved)}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">By foreclosing now, you save:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• {Math.floor((tenure * 12 - elapsedMonths)/12)} years {(tenure * 12 - elapsedMonths)%12} months of payments</li>
                  <li>• {formatCurrency(interestSaved)} in interest payments</li>
                </ul>
              </div>
              
              <Button className="w-full gradient-primary">Talk to an Advisor</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  const renderBalanceTransferCalculator = () => {
    const { outstandingAmount, currentInterest, newInterest, tenure, monthlySavings, totalSavings } = calculatorState.balanceTransfer;
    
    const barData = [
      {
        name: 'Current Loan',
        amount: outstandingAmount * (1 + (currentInterest / 100) * (tenure)),
      },
      {
        name: 'New Loan',
        amount: outstandingAmount * (1 + (newInterest / 100) * (tenure)),
      },
    ];
    
    const chartHeight = isMobile ? 150 : 180;
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <Card className="lg:col-span-2">
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>Balance Transfer Calculator</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-4" : "space-y-8"}>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Outstanding Amount: {formatCurrency(outstandingAmount)}</label>
              </div>
              <Slider
                value={[outstandingAmount]}
                min={100000}
                max={10000000}
                step={100000}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    balanceTransfer: {
                      ...prev.balanceTransfer,
                      outstandingAmount: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Current Interest Rate: {currentInterest}%</label>
              </div>
              <Slider
                value={[currentInterest]}
                min={7}
                max={20}
                step={0.1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    balanceTransfer: {
                      ...prev.balanceTransfer,
                      currentInterest: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">New Interest Rate: {newInterest}%</label>
              </div>
              <Slider
                value={[newInterest]}
                min={5}
                max={15}
                step={0.1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    balanceTransfer: {
                      ...prev.balanceTransfer,
                      newInterest: values[0],
                    },
                  }));
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Remaining Tenure: {tenure} years</label>
              </div>
              <Slider
                value={[tenure]}
                min={1}
                max={30}
                step={1}
                onValueChange={(values) => {
                  setCalculatorState(prev => ({
                    ...prev,
                    balanceTransfer: {
                      ...prev.balanceTransfer,
                      tenure: values[0],
                    },
                  }));
                }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className={isMobile ? "py-3 px-4" : ""}>
            <CardTitle>Transfer Benefits</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? "py-3 px-4 space-y-3" : "space-y-4"}>
            <div>
              <p className="text-sm text-gray-500">Monthly Savings</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(monthlySavings)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Total Savings</p>
              <p className="text-xl font-semibold text-green-600">{formatCurrency(totalSavings)}</p>
              <p className="text-sm text-gray-500">over {tenure} years</p>
            </div>
            
            <div className={`h-[${chartHeight}px] mt-4`}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="amount" fill="#319795" name="Total Payable" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <Button className="w-full gradient-primary">Apply for Transfer</Button>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  const renderPrePaymentCalculator = () => {
    const { loanAmount, interestRate, tenure, prepaymentAmount, newTenure, interestSaved } = calculatorState.prePayment;
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pre-Payment Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Loan Amount: {formatCurrency(loanAmount)}</label>
                </div>
                <Slider
                  value={[loanAmount]}
                  min={100000}
                  max={10000000}
                  step={100000}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      prePayment: {
                        ...prev.prePayment,
                        loanAmount: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Interest Rate: {interestRate}%</label>
                </div>
                <Slider
                  value={[interestRate]}
                  min={5}
                  max={20}
                  step={0.1}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      prePayment: {
                        ...prev.prePayment,
                        interestRate: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Original Tenure: {tenure} years</label>
                </div>
                <Slider
                  value={[tenure]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      prePayment: {
                        ...prev.prePayment,
                        tenure: values[0],
                      },
                    }));
                  }}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Pre-Payment Amount: {formatCurrency(prepaymentAmount)}</label>
                </div>
                <Slider
                  value={[prepaymentAmount]}
                  min={100000}
                  max={loanAmount * 0.9}
                  step={100000}
                  onValueChange={(values) => {
                    setCalculatorState(prev => ({
                      ...prev,
                      prePayment: {
                        ...prev.prePayment,
                        prepaymentAmount: values[0],
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pre-Payment Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">New Tenure</p>
                <p className="text-2xl font-bold text-teal-600">{Math.floor(newTenure)} years {Math.round((newTenure - Math.floor(newTenure)) * 12)} months</p>
                <p className="text-sm text-gray-500">reduced from {tenure} years</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Interest Savings</p>
                <p className="text-xl font-semibold text-green-600">{formatCurrency(interestSaved)}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">By making a pre-payment of {formatCurrency(prepaymentAmount)}, you:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Reduce your loan tenure by {Math.floor(tenure - newTenure)} years {Math.round((tenure - newTenure - Math.floor(tenure - newTenure)) * 12)} months</li>
                  <li>• Save {formatCurrency(interestSaved)} in interest</li>
                </ul>
              </div>
              
              <Button className="w-full gradient-primary">Talk to an Advisor</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render tab navigation based on device size
  const renderTabNavigation = () => {
    if (isMobile) {
      return (
        <div className="overflow-x-auto pb-4">
          <ToggleGroup 
            type="single" 
            value={activeTab} 
            onValueChange={(value) => {
              if (value) setActiveTab(value);
            }}
            className="flex w-full justify-between"
          >
            <ToggleGroupItem value="emi" className="flex-1 text-xs px-2 py-2 text-center whitespace-nowrap">
              EMI
            </ToggleGroupItem>
            <ToggleGroupItem value="eligibility" className="flex-1 text-xs px-2 py-2 text-center whitespace-nowrap">
              Eligibility
            </ToggleGroupItem>
            <ToggleGroupItem value="foreclose" className="flex-1 text-xs px-2 py-2 text-center whitespace-nowrap">
              Foreclose
            </ToggleGroupItem>
            <ToggleGroupItem value="balance-transfer" className="flex-1 text-xs px-2 py-2 text-center whitespace-nowrap">
              Balance Transfer
            </ToggleGroupItem>
            <ToggleGroupItem value="pre-payment" className="flex-1 text-xs px-2 py-2 text-center whitespace-nowrap">
              Pre-payment
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      );
    }

    return (
      <TabsList className="bg-gray-100 p-1">
        <TabsTrigger value="emi" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
          EMI Calculator
        </TabsTrigger>
        <TabsTrigger value="eligibility" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
          Eligibility
        </TabsTrigger>
        <TabsTrigger value="foreclose" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
          Foreclose
        </TabsTrigger>
        <TabsTrigger value="balance-transfer" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
          Balance Transfer
        </TabsTrigger>
        <TabsTrigger value="pre-payment" className="data-[state=active]:gradient-primary data-[state=active]:text-white">
          Pre-payment
        </TabsTrigger>
      </TabsList>
    );
  };

  return (
    <section className={isMobile ? "py-5" : "section-padding" } >
      <div className="container mx-auto px-4" >
        <div className={`text-center max-w-3xl mx-auto ${isMobile ? 'mb-8' : 'mb-16'}`}>
          <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold mb-4`}>
            Loan <span className="text-gradient">Calculators</span>
          </h2>
          {/* <p className="text-gray-600">
            {isMobile ? 'Plan your loan and make informed financial decisions.' : 
             'Use our financial calculators to plan your loan, estimate EMIs, and make informed decisions for your financial future.'}
          </p> */}
        </div>
        
        <Tabs defaultValue="emi" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <div className={`flex justify-center ${isMobile ? 'mb-4' : 'mb-10'}`}>
            {renderTabNavigation()}
          </div>
          
          <TabsContent value="emi">
            {renderEMICalculator()}
          </TabsContent>
          
          <TabsContent value="eligibility">
            {renderEligibilityCalculator()}
          </TabsContent>
          
          <TabsContent value="foreclose">
            {renderForecloseCalculator()}
          </TabsContent>
          
          <TabsContent value="balance-transfer">
            {renderBalanceTransferCalculator()}
          </TabsContent>
          
          <TabsContent value="pre-payment">
            {renderPrePaymentCalculator()}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LoanCalculators;
