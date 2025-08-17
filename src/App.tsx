import React, { useState } from 'react';
import InputField from './components/InputField';
import './index.css'
function App() {
  const [values, setValues] = useState({
    basic: '',
    email: '',
    password: '',
    withClear: 'Clear me!',
    loading: '',
    disabled: 'Cannot edit',
    invalid: 'invalid@email'
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleClear = (field: string) => () => {
    setValues(prev => ({ ...prev, [field]: '' }));
  };

  const simulateLoading =() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  const containerClasses = theme === 'dark'
    ? 'min-h-screen bg-gray-900 text-white'
    : 'min-h-screen bg-gray-50 text-gray-900';

  return (
    <div className={containerClasses}>
      <div className="w-screen mx-auto p-8 ">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Input Field Components</h1>
            <div className="flex items-center space-x-4">
        
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className={`px-4 py-2 rounded-lg transition-colors ${theme === 'dark'
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                  }`}
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
          </div>
          {/* <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            A comprehensive input component with multiple variants, states, and features.
          </p> */}
        </div>

        {/* Basic Examples */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Basic Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Basic Input"
              placeholder="Enter some text..."
              value={values.basic}
              onChange={handleChange('basic')}
              helperText="This is a basic input field"
              theme={theme}
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={values.email}
              onChange={handleChange('email')}
              helperText="We'll never share your email"
              required
              theme={theme}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter password..."
              value={values.password}
              onChange={handleChange('password')}
              showPasswordToggle
              helperText="At least 8 characters"
              theme={theme}
            />

            <InputField
              label="With Clear Button"
              placeholder="Type to see clear button..."
              value={values.withClear}
              onChange={handleChange('withClear')}
              showClearButton
              onClear={handleClear('withClear')}
              theme={theme}
            />
          </div>
        </div>

        {/* Variants */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <InputField
              label="Filled"
              variant="filled"
              placeholder="Filled input..."
              value={values.basic}
              onChange={handleChange('basic')}
              theme={theme}
            />   
            <InputField
              label="Outlined (Default)"
              variant="outlined"
              placeholder="Outlined input..."
              value={values.basic}
              onChange={handleChange('basic')}
              theme={theme}
            />
            <InputField
              label="Ghost"
              variant="ghost"
              placeholder="Ghost input..."
              value={values.basic}
              onChange={handleChange('basic')}
              theme={theme}
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="space-y-4">
            <InputField
              label="Small Size"
              size="sm"
              placeholder="Small input..."
              value={values.basic}
              onChange={handleChange('basic')}
              helperText="This is a small input field"
              theme={theme}
            />

            <InputField
              label="Medium Size (Default)"
              size="md"
              placeholder="Medium input..."
              value={values.basic}
              onChange={handleChange('basic')}
              helperText="This is a medium input field"
              theme={theme}
            />

            <InputField
              label="Large Size"
              size="lg"
              placeholder="Large input..."
              value={values.basic}
              onChange={handleChange('basic')}
              helperText="This is a large input field"
              theme={theme}
            />
          </div>
        </div>

        {/* States */}    
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">States</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='relative'>
            <InputField
              label="Loading State"
              placeholder="Processing..."
              value={values.loading}
              onChange={handleChange('loading')}
              loading={isLoading}
              helperText="Click 'Test Loading' button to see loading state"
              theme={theme}
              
            /> <button
                onClick={simulateLoading}
                className="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors absolute right-[10px] top-[-40%]">
                Test Loading
              </button>
          </div>
            <InputField
              label="Disabled State"
              placeholder="Cannot interact..."
              value={values.disabled}
              onChange={handleChange('disabled')}
              disabled
              helperText="This input is disabled"
              theme={theme}
            />

            <InputField
              label="Invalid State"
              type="email"
              placeholder="Enter valid email..."
              value={values.invalid}
              onChange={handleChange('invalid')}
              invalid
              errorMessage="Please enter a valid email address"
              theme={theme}
            />

            <InputField
              label="Required Field"
              placeholder="This field is required..."
              value={values.basic}
              onChange={handleChange('basic')}
              required
              helperText="This field is required"
              theme={theme}
            />
          </div>
        </div>

        {/* Complex Example */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Complex Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Advanced Password"
              type="password"
              placeholder="Enter secure password..."
              value={values.password}
              onChange={handleChange('password')}
              showPasswordToggle
              showClearButton
              onClear={handleClear('password')}
              size="lg"
              variant="filled"
              required
              helperText="Must contain at least 8 characters, one uppercase, one number"
              theme={theme}
            />

            <InputField
              label="Search Field"
              placeholder="Search anything..."
              value={values.withClear}
              onChange={handleChange('withClear')}
              showClearButton
              onClear={handleClear('withClear')}
              size="lg"
              variant="ghost"
              helperText="Press Enter to search"
              theme={theme}
            />
          </div>
        </div>

        {/* All Variants Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">All Variants & Sizes Matrix</h2>
          <div className="space-y-8">
            {(['outlined', 'filled', 'ghost'] as const).map(variant => (
              <div key={variant}>
                <h3 className="text-lg font-medium mb-4 capitalize">{variant} Variant</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(['sm', 'md', 'lg'] as const).map(size => (
                    <InputField
                      key={`${variant}-${size}`}
                      label={`${size.toUpperCase()} ${variant}`}
                      variant={variant}
                      size={size}
                      placeholder={`${size} ${variant} input...`}
                      value={values.basic}
                      onChange={handleChange('basic')}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;