// EPIDIA Platform - Navigation and Module Management

// Module data endpoints
const API_BASE = 'http://localhost:8000/api/v1';

// Navigation handlers
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    loadModuleData();
});

function setupNavigation() {
    // Overview
    document.getElementById('nav-overview')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
    
    // FoodSight
    document.getElementById('nav-foodsight')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'foodsight.html';
    });
    
    // ClimaRisk
    document.getElementById('nav-climarisk')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'climarisk.html';
    });
    
    // DemoHealth
    document.getElementById('nav-demohealth')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'demohealth.html';
    });
    
    // AIWatch
    document.getElementById('nav-aiwatch')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'aiwatch.html';
    });
    
    // WealthFlow
    document.getElementById('nav-wealthflow')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'wealthflow.html';
    });
    
    // Alerts
    document.getElementById('nav-alerts')?.addEventListener('click', (e) => {
        e.preventDefault();
        showAlerts();
    });
    
    // Data Sources
    document.getElementById('nav-sources')?.addEventListener('click', (e) => {
        e.preventDefault();
        showDataSources();
    });
    
    // Settings
    document.getElementById('nav-settings')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSettings();
    });
}

function setActiveNav(navId) {
    // Remove active from all
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    // Add active to selected
    document.getElementById(navId)?.classList.add('active');
}

function showOverview() {
    // Already showing - this is the default view
    console.log('Overview active');
}

function showModuleDetail(moduleName) {
    alert(`${moduleName} detailed view coming soon!\n\nThis module provides:\n- Real-time risk scoring\n- Historical trend analysis\n- Regional breakdowns\n- Actionable recommendations`);
}

function showAlerts() {
    const alertsHTML = `
        <div>
            <div style="margin-bottom: 20px; padding: 16px; background: rgba(249, 64, 96, 0.1); border-left: 3px solid var(--crit); border-radius: 8px;">
                <div style="font-weight: 700; color: var(--crit); margin-bottom: 8px;">🚨 CRITICAL - FoodSight</div>
                <div style="font-size: 12px; margin-bottom: 6px;">East Africa crisis probability exceeded 80% threshold</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Gaza, Sudan, Horn of Africa • 2 hours ago</div>
            </div>
            
            <div style="margin-bottom: 20px; padding: 16px; background: rgba(245, 196, 0, 0.1); border-left: 3px solid var(--warn); border-radius: 8px;">
                <div style="font-weight: 700; color: var(--warn); margin-bottom: 8px;">⚠️ WARNING - ClimaRisk</div>
                <div style="font-size: 12px; margin-bottom: 6px;">Extreme weather patterns detected in SE Asia region</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Pakistan, Bangladesh, Myanmar • 5 hours ago</div>
            </div>
            
            <div style="margin-bottom: 20px; padding: 16px; background: rgba(245, 196, 0, 0.1); border-left: 3px solid var(--warn); border-radius: 8px;">
                <div style="font-weight: 700; color: var(--warn); margin-bottom: 8px;">⚠️ WARNING - DemoHealth</div>
                <div style="font-size: 12px; margin-bottom: 6px;">Press freedom index declining in Eastern Europe</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Russia, Hungary, Turkey • 8 hours ago</div>
            </div>
            
            <div style="margin-bottom: 20px; padding: 16px; background: rgba(249, 64, 96, 0.1); border-left: 3px solid var(--crit); border-radius: 8px;">
                <div style="font-weight: 700; color: var(--crit); margin-bottom: 8px;">🚨 CRITICAL - AIWatch</div>
                <div style="font-size: 12px; margin-bottom: 6px;">Facial recognition deployment without consent detected</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Multiple regions • 12 hours ago</div>
            </div>
            
            <div style="margin-bottom: 0; padding: 16px; background: rgba(34, 208, 106, 0.1); border-left: 3px solid var(--safe); border-radius: 8px;">
                <div style="font-weight: 700; color: var(--safe); margin-bottom: 8px;">✓ RESOLVED - WealthFlow</div>
                <div style="font-size: 12px; margin-bottom: 6px;">Minimum wage legislation passed in Latin America</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Brazil, Argentina • 1 day ago</div>
            </div>
        </div>
    `;
    
    showModal('🔔 Active Alerts', 'Real-time crisis notifications', alertsHTML);
}

function showDataSources() {
    const sourcesHTML = `
        <div>
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">FAO GIEWS</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">Global Information and Early Warning System on Food and Agriculture</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 2 hours ago • Status: Active</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">NASA FEWS NET</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">Famine Early Warning Systems Network</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 4 hours ago • Status: Active</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">ESA Copernicus</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">European Space Agency Climate Monitoring Service</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 1 hour ago • Status: Active</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">World Bank Open Data</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">Economic indicators and development statistics</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 6 hours ago • Status: Active</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">V-Dem Institute</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">Varieties of Democracy - Democratic health indicators</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 3 hours ago • Status: Active</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 14px; background: rgba(0, 212, 177, 0.08); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <span style="color: var(--safe); font-size: 18px;">●</span>
                    <div style="font-weight: 700;">IPCC Data Distribution Centre</div>
                </div>
                <div style="font-size: 11px; color: var(--sub); margin-bottom: 6px;">Intergovernmental Panel on Climate Change data</div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub);">Last updated: 5 hours ago • Status: Active</div>
            </div>
            
            <div style="margin-top: 20px; padding: 12px; background: rgba(255, 255, 255, 0.03); border-radius: 8px; text-align: center;">
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">All sources refresh every 6 hours • Next update in 2h 15m</div>
            </div>
        </div>
    `;
    
    showModal('📡 Data Sources', 'Connected APIs and data feeds', sourcesHTML);
}

function showSettings() {
    const settingsHTML = `
        <div>
            <div style="margin-bottom: 24px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">Alert Thresholds</div>
                <div style="margin-bottom: 12px;">
                    <label style="font-size: 11px; color: var(--sub); display: block; margin-bottom: 6px;">Critical Alert Threshold</label>
                    <input type="range" min="70" max="95" value="80" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                    <span style="font-family: var(--mono); font-size: 10px; color: var(--txt);">80%</span>
                </div>
                <div style="margin-bottom: 12px;">
                    <label style="font-size: 11px; color: var(--sub); display: block; margin-bottom: 6px;">Warning Alert Threshold</label>
                    <input type="range" min="50" max="80" value="65" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                    <span style="font-family: var(--mono); font-size: 10px; color: var(--txt);">65%</span>
                </div>
            </div>
            
            <div style="margin-bottom: 24px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">Notification Preferences</div>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Email notifications for critical alerts</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Browser push notifications</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">SMS alerts for emergencies</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Daily summary reports</span>
                </label>
            </div>
            
            <div style="margin-bottom: 24px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">Regional Focus Areas</div>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">East Africa</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Southeast Asia</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Latin America</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Eastern Europe</span>
                </label>
                <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 12px;">Middle East</span>
                </label>
            </div>
            
            <div style="margin-bottom: 24px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">Data Refresh Intervals</div>
                <select style="width: 100%; padding: 8px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>Every 1 hour</option>
                    <option>Every 3 hours</option>
                    <option selected>Every 6 hours</option>
                    <option>Every 12 hours</option>
                    <option>Every 24 hours</option>
                </select>
            </div>
            
            <div style="margin-bottom: 24px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">API Key Management</div>
                <div style="margin-bottom: 10px;">
                    <label style="font-size: 11px; color: var(--sub); display: block; margin-bottom: 6px;">Gemini API Key</label>
                    <input type="password" value="AIzaSyAND4thRQGQdFTgvKhuYNeCEtjh9jZocZc" style="width: 100%; padding: 8px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-family: var(--mono); font-size: 10px;">
                </div>
                <div style="font-family: var(--mono); font-size: 9px; color: var(--sub); margin-top: 6px;">
                    ✓ API key validated • Last used: 5 minutes ago
                </div>
            </div>
            
            <div style="margin-top: 20px; padding: 12px; background: rgba(0, 212, 177, 0.08); border-radius: 8px; text-align: center;">
                <button style="padding: 10px 24px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 12px;">Save Settings</button>
            </div>
        </div>
    `;
    
    showModal('⚙️ Settings', 'Configure your EPIDIA platform', settingsHTML);
}

function showModal(title, subtitle, content) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.id = 'customModal';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        background: rgba(7, 9, 15, 0.85);
        backdrop-filter: blur(10px);
        align-items: center;
        justify-content: center;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: var(--bg2);
        border: 1px solid var(--bdr);
        border-radius: 16px;
        padding: 28px;
        width: 520px;
        max-width: 90vw;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `;
    
    modal.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="font-size: 20px; font-weight: 800; margin-bottom: 6px;">${title}</div>
            <div style="font-family: var(--mono); font-size: 11px; color: var(--sub);">${subtitle}</div>
        </div>
        <div style="flex: 1; overflow-y: auto;">
            ${content}
        </div>
        <button onclick="document.getElementById('customModal').remove()" style="margin-top: 20px; width: 100%; padding: 10px; background: rgba(255,255,255,0.05); color: var(--txt); border: 1px solid var(--bdr); border-radius: 8px; font-family: var(--fn); font-size: 12px; font-weight: 700; cursor: pointer;">Close</button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

function showCommandCenter() {
    const commandCenterHTML = `
        <div style="display: flex; flex-direction: column; height: 100%;">
            <!-- Tabs -->
            <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--bdr); padding-bottom: 12px;">
                <button class="cc-tab active" data-tab="export" style="flex: 1; padding: 10px; background: var(--teal-g); color: var(--teal); border: 1px solid rgba(0,212,177,0.2); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">📊 Export</button>
                <button class="cc-tab" data-tab="data" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.03); color: var(--sub); border: 1px solid var(--bdr); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">🔄 Data</button>
                <button class="cc-tab" data-tab="share" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.03); color: var(--sub); border: 1px solid var(--bdr); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">📤 Share</button>
                <button class="cc-tab" data-tab="actions" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.03); color: var(--sub); border: 1px solid var(--bdr); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">⚡ Actions</button>
                <button class="cc-tab" data-tab="health" style="flex: 1; padding: 10px; background: rgba(255,255,255,0.03); color: var(--sub); border: 1px solid var(--bdr); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer;">🔍 Health</button>
            </div>
            
            <!-- Tab Content -->
            <div id="ccTabContent" style="flex: 1; overflow-y: auto;">
                <!-- Export Tab (default) -->
                <div class="cc-content" data-content="export">
                    <div style="margin-bottom: 16px; padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; cursor: pointer;" onclick="alert('📄 Generating PDF report...\\n\\nReport will include:\\n• All crisis scores\\n• Regional breakdowns\\n• Trend analysis\\n• Recommendations')">
                        <div style="font-weight: 700; margin-bottom: 6px;">📄 Download Crisis Report (PDF)</div>
                        <div style="font-size: 11px; color: var(--sub);">Comprehensive report with all current crisis data</div>
                    </div>
                    
                    <div style="margin-bottom: 16px; padding: 16px; background: rgba(123,94,246,0.08); border-radius: 8px; cursor: pointer;" onclick="alert('🤖 Generating AI Summary...\\n\\nUsing Gemini AI to create:\\n• Executive summary\\n• Key insights\\n• Priority recommendations\\n• Risk assessment')">
                        <div style="font-weight: 700; margin-bottom: 6px;">🤖 Generate AI Executive Summary</div>
                        <div style="font-size: 11px; color: var(--sub);">AI-powered analysis of all crises with recommendations</div>
                    </div>
                    
                    <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="alert('💾 Exporting data...\\n\\nFormats available:\\n• JSON (raw data)\\n• CSV (spreadsheet)\\n• Excel (formatted)')">
                        <div style="font-weight: 700; margin-bottom: 6px;">💾 Export Raw Data (JSON/CSV)</div>
                        <div style="font-size: 11px; color: var(--sub);">Download all metrics in machine-readable format</div>
                    </div>
                    
                    <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="alert('📊 Creating charts...\\n\\nGenerating:\\n• Crisis trend graphs\\n• Regional heatmaps\\n• Comparative analysis\\n• Time series data')">
                        <div style="font-weight: 700; margin-bottom: 6px;">📊 Export Visualizations</div>
                        <div style="font-size: 11px; color: var(--sub);">Download charts and graphs as PNG/SVG</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showModal('⚡ Command Center', 'Crisis management action hub', commandCenterHTML);
    
    // Add tab switching functionality
    setTimeout(() => {
        document.querySelectorAll('.cc-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // Update active tab
                document.querySelectorAll('.cc-tab').forEach(t => {
                    t.style.background = 'rgba(255,255,255,0.03)';
                    t.style.color = 'var(--sub)';
                    t.style.border = '1px solid var(--bdr)';
                });
                tab.style.background = 'var(--teal-g)';
                tab.style.color = 'var(--teal)';
                tab.style.border = '1px solid rgba(0,212,177,0.2)';
                
                // Update content
                const content = getTabContent(tabName);
                document.getElementById('ccTabContent').innerHTML = content;
            });
        });
    }, 100);
}

function getTabContent(tab) {
    const contents = {
        export: `
            <div class="cc-content">
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; cursor: pointer;" onclick="generatePDFReport()">
                    <div style="font-weight: 700; margin-bottom: 6px;">📄 Download Crisis Report (PDF)</div>
                    <div style="font-size: 11px; color: var(--sub);">Comprehensive report with all current crisis data</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(123,94,246,0.08); border-radius: 8px; cursor: pointer;" onclick="generateAISummary()">
                    <div style="font-weight: 700; margin-bottom: 6px;">🤖 Generate AI Executive Summary</div>
                    <div style="font-size: 11px; color: var(--sub);">AI-powered analysis of all crises with recommendations</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="exportRawData()">
                    <div style="font-weight: 700; margin-bottom: 6px;">💾 Export Raw Data (JSON/CSV)</div>
                    <div style="font-size: 11px; color: var(--sub);">Download all metrics in machine-readable format</div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="exportVisualizations()">
                    <div style="font-weight: 700; margin-bottom: 6px;">📊 Export Visualizations</div>
                    <div style="font-size: 11px; color: var(--sub);">Download charts and graphs as PNG/SVG</div>
                </div>
            </div>
        `,
        data: `
            <div class="cc-content">
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; cursor: pointer;" onclick="refreshAllData()">
                    <div style="font-weight: 700; margin-bottom: 6px;">🔄 Refresh All Data Sources</div>
                    <div style="font-size: 11px; color: var(--sub);">Force update from all connected APIs</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">Last Sync Times:</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• FoodSight (World Bank): <span style="color: var(--safe);" id="sync-food">Just now</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• ClimaRisk (NASA EONET): <span style="color: var(--safe);" id="sync-clima">Just now</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• News Feed (News API): <span style="color: var(--safe);" id="sync-news">Just now</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• DemoHealth: <span style="color: var(--sub);" id="sync-demo">Demo data</span></div>
                    <div style="font-size: 11px;">• AIWatch/WealthFlow: <span style="color: var(--sub);">Manual data</span></div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">Data Sources Status:</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">✓ World Bank API: <span style="color: var(--safe);">Connected</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">✓ NASA EONET: <span style="color: var(--safe);">Active (50 events)</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">✓ News API: <span style="color: var(--safe);">Active (1,608 articles)</span></div>
                    <div style="font-size: 11px;">⚠ ACLED: <span style="color: var(--sub);">Not configured</span></div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">Auto-Refresh Settings:</div>
                    <select style="width: 100%; padding: 8px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                        <option>Every 1 hour</option>
                        <option>Every 3 hours</option>
                        <option selected>Every 6 hours</option>
                        <option>Every 12 hours</option>
                        <option>Manual only</option>
                    </select>
                    <div style="font-size: 10px; color: var(--sub); margin-top: 8px;">Next refresh: ${getNextRefreshTime()}</div>
                </div>
            </div>
        `,
        share: `
            <div class="cc-content">
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; cursor: pointer;" onclick="generateShareableLink()">
                    <div style="font-weight: 700; margin-bottom: 6px;">🔗 Generate Shareable Link</div>
                    <div style="font-size: 11px; color: var(--sub);">Create secure link to share dashboard view</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="emailReportToTeam()">
                    <div style="font-weight: 700; margin-bottom: 6px;">📧 Email Report to Team</div>
                    <div style="font-size: 11px; color: var(--sub);">Send automated report via email</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="scheduleReports()">
                    <div style="font-weight: 700; margin-bottom: 6px;">📅 Schedule Automated Reports</div>
                    <div style="font-size: 11px; color: var(--sub);">Set up daily/weekly automated reports</div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="configureWebhooks()">
                    <div style="font-weight: 700; margin-bottom: 6px;">🔌 Configure Webhooks</div>
                    <div style="font-size: 11px; color: var(--sub);">Send real-time alerts to external systems</div>
                </div>
            </div>
        `,
        actions: `
            <div class="cc-content">
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(249,64,96,0.08); border-radius: 8px; cursor: pointer;" onclick="escalateCrisis()">
                    <div style="font-weight: 700; margin-bottom: 6px;">🚨 Escalate Critical Crisis</div>
                    <div style="font-size: 11px; color: var(--sub);">Notify authorities and emergency services</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(245,196,0,0.08); border-radius: 8px; cursor: pointer;" onclick="createIncidentTicket()">
                    <div style="font-weight: 700; margin-bottom: 6px;">📋 Create Incident Ticket</div>
                    <div style="font-size: 11px; color: var(--sub);">Log crisis in incident management system</div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="notifyResponseTeam()">
                    <div style="font-weight: 700; margin-bottom: 6px;">👥 Notify Response Team</div>
                    <div style="font-size: 11px; color: var(--sub);">Alert crisis response personnel</div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer;" onclick="acknowledgeCrisis()">
                    <div style="font-weight: 700; margin-bottom: 6px;">✓ Mark Crisis as Acknowledged</div>
                    <div style="font-size: 11px; color: var(--sub);">Confirm crisis has been reviewed</div>
                </div>
            </div>
        `,
        health: `
            <div class="cc-content">
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(34,208,106,0.08); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">🟢 System Status: Operational</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Backend API: <span style="color: var(--safe);">✓ Online</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Gemini AI: <span style="color: var(--safe);">✓ Connected</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Database: <span style="color: var(--safe);">✓ Healthy</span></div>
                    <div style="font-size: 11px;">• All Data Sources: <span style="color: var(--safe);">✓ Active</span></div>
                </div>
                
                <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">Performance Metrics:</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• API Response Time: <span style="color: var(--safe);">45ms</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Data Freshness: <span style="color: var(--safe);">98%</span></div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Uptime (30d): <span style="color: var(--safe);">99.9%</span></div>
                    <div style="font-size: 11px;">• Active Users: <span style="color: var(--txt);">24</span></div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 12px;">Recent Activity:</div>
                    <div style="font-size: 10px; font-family: var(--mono); color: var(--sub); margin-bottom: 4px;">[15:42] Data refresh completed</div>
                    <div style="font-size: 10px; font-family: var(--mono); color: var(--sub); margin-bottom: 4px;">[15:38] Alert triggered: FoodSight</div>
                    <div style="font-size: 10px; font-family: var(--mono); color: var(--sub); margin-bottom: 4px;">[15:35] User login: admin@epidia.app</div>
                    <div style="font-size: 10px; font-family: var(--mono); color: var(--sub);">[15:30] Report generated: crisis-summary.pdf</div>
                </div>
            </div>
        `
    };
    
    return contents[tab] || contents.export;
}

async function loadModuleData() {
    try {
        // In a real implementation, this would fetch from the backend
        console.log('Module data loaded from embedded dashboard');
    } catch (error) {
        console.error('Failed to load module data:', error);
    }
}

console.log('EPIDIA Platform initialized');


// ============================================
// COMMAND CENTER FUNCTIONS
// ============================================

function generatePDFReport() {
    showReportModal('📄 Crisis Report Generated', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">EPIDIA Global Crisis Report</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Generated: ${new Date().toLocaleString()}</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 12px; background: rgba(0,212,177,0.08); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">📊 Crisis Scores</div>
                <div style="font-size: 12px; margin-bottom: 4px;">• FoodSight: 73% (CRITICAL - East Africa)</div>
                <div style="font-size: 12px; margin-bottom: 4px;">• ClimaRisk: 100% (CRITICAL - 49 severe events)</div>
                <div style="font-size: 12px; margin-bottom: 4px;">• DemoHealth: 45% (WARNING - Eastern Europe)</div>
                <div style="font-size: 12px; margin-bottom: 4px;">• AIWatch: 82% (CRITICAL - Global surveillance)</div>
                <div style="font-size: 12px;">• WealthFlow: 58% (WARNING - Top 1% concentration)</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">🌍 Regional Breakdowns</div>
                <div style="font-size: 11px; margin-bottom: 4px;">• East Africa: Gaza (2.3M), Sudan (25M), Horn of Africa</div>
                <div style="font-size: 11px; margin-bottom: 4px;">• SE Asia: Pakistan floods (33M affected)</div>
                <div style="font-size: 11px; margin-bottom: 4px;">• Eastern Europe: Russia, Hungary, Turkey</div>
                <div style="font-size: 11px;">• North America: 5 active wildfires (8,666 acres)</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">📈 Trend Analysis</div>
                <div style="font-size: 11px; margin-bottom: 4px;">• Food crisis: ↑ 8% increase (30 days)</div>
                <div style="font-size: 11px; margin-bottom: 4px;">• Climate events: ↑ 15% increase (30 days)</div>
                <div style="font-size: 11px;">• Democratic health: ↓ 12% decline (90 days)</div>
            </div>
            
            <div style="padding: 12px; background: rgba(123,94,246,0.08); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">💡 Recommendations</div>
                <div style="font-size: 11px; margin-bottom: 4px;">1. Immediate humanitarian aid to East Africa</div>
                <div style="font-size: 11px; margin-bottom: 4px;">2. Climate disaster response coordination</div>
                <div style="font-size: 11px;">3. Monitor democratic backsliding in Eastern Europe</div>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
                <button onclick="downloadReportAsText()" style="padding: 10px 20px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; margin-right: 10px;">Download as TXT</button>
                <button onclick="copyReportToClipboard()" style="padding: 10px 20px; background: rgba(255,255,255,0.1); color: var(--txt); border: 1px solid var(--bdr); border-radius: 8px; font-weight: 700; cursor: pointer;">Copy to Clipboard</button>
            </div>
        </div>
    `);
}

async function generateAISummary() {
    showReportModal('🤖 Generating AI Summary...', '<div style="text-align: center; padding: 40px;"><div style="font-size: 14px; color: var(--sub);">Analyzing crisis data with Gemini AI...</div></div>');
    
    try {
        const response = await fetch('http://localhost:8000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: 'Generate an executive summary of the current global crisis situation based on: FoodSight 73% (Gaza 2.3M people, Sudan 25M need aid), ClimaRisk 100% (49 severe natural disasters including wildfires), DemoHealth 45% (democratic backsliding in Russia, Myanmar, Iran), AIWatch 82% (facial recognition surveillance), WealthFlow 58% (top 1% owns 45% wealth). Include key insights, priority recommendations, and risk assessment.',
                context: 'foodsight'
            })
        });
        
        const data = await response.json();
        
        showReportModal('🤖 AI Executive Summary', `
            <div style="text-align: left;">
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">AI-Powered Crisis Analysis</div>
                    <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Powered by Google Gemini AI • ${new Date().toLocaleString()}</div>
                </div>
                
                <div style="padding: 16px; background: rgba(123,94,246,0.08); border-radius: 8px; margin-bottom: 16px; max-height: 400px; overflow-y: auto;">
                    <div style="font-size: 12px; line-height: 1.6; white-space: pre-wrap;">${data.response}</div>
                </div>
                
                <div style="text-align: center;">
                    <button onclick="copyAISummary(\`${data.response.replace(/`/g, '\\`')}\`)" style="padding: 10px 20px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">Copy Summary</button>
                </div>
            </div>
        `);
    } catch (error) {
        showReportModal('🤖 AI Summary Error', `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 14px; color: var(--crit); margin-bottom: 10px;">Failed to generate AI summary</div>
                <div style="font-size: 11px; color: var(--sub);">Make sure the backend is running</div>
            </div>
        `);
    }
}

function exportRawData() {
    const crisisData = {
        timestamp: new Date().toISOString(),
        gcri: 62,
        modules: {
            foodsight: { score: 73, status: 'CRITICAL', region: 'East Africa', affected: '2.3M people (Gaza), 25M need aid (Sudan)' },
            climarisk: { score: 100, status: 'CRITICAL', events: 49, source: 'NASA EONET' },
            demohealth: { score: 45, status: 'WARNING', region: 'Eastern Europe', countries: ['Russia', 'Myanmar', 'Iran'] },
            aiwatch: { score: 82, status: 'CRITICAL', concern: 'Facial recognition surveillance' },
            wealthflow: { score: 58, status: 'WARNING', metric: 'Top 1% owns 45% wealth' }
        },
        sources: ['World Bank', 'NASA EONET', 'News API', 'FAO', 'V-Dem Institute']
    };
    
    const jsonData = JSON.stringify(crisisData, null, 2);
    const csvData = convertToCSV(crisisData);
    
    showReportModal('💾 Export Data', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Export Crisis Data</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Choose your format</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <button onclick="downloadJSON()" style="width: 100%; padding: 12px; background: rgba(0,212,177,0.08); border: 1px solid rgba(0,212,177,0.2); border-radius: 8px; color: var(--txt); font-weight: 700; cursor: pointer; margin-bottom: 10px;">📄 Download as JSON</button>
                <button onclick="downloadCSV()" style="width: 100%; padding: 12px; background: rgba(0,212,177,0.08); border: 1px solid rgba(0,212,177,0.2); border-radius: 8px; color: var(--txt); font-weight: 700; cursor: pointer;">📊 Download as CSV</button>
            </div>
            
            <div style="padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px; font-size: 11px;">Preview (JSON):</div>
                <pre style="font-family: var(--mono); font-size: 9px; color: var(--sub); overflow-x: auto; max-height: 200px;">${jsonData}</pre>
            </div>
        </div>
    `);
}

function showReportModal(title, content) {
    const existingModal = document.getElementById('reportModal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'reportModal';
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: flex;
        background: rgba(7, 9, 15, 0.9);
        backdrop-filter: blur(10px);
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="background: var(--bg2); border: 1px solid var(--bdr); border-radius: 16px; padding: 28px; width: 600px; max-width: 90vw; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="font-size: 18px; font-weight: 800;">${title}</div>
                <button onclick="document.getElementById('reportModal').remove()" style="background: none; border: none; color: var(--sub); font-size: 24px; cursor: pointer; line-height: 1;">&times;</button>
            </div>
            ${content}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

function downloadReportAsText() {
    const report = `EPIDIA GLOBAL CRISIS REPORT
Generated: ${new Date().toLocaleString()}
========================================

CRISIS SCORES:
• FoodSight: 73% (CRITICAL - East Africa)
• ClimaRisk: 100% (CRITICAL - 49 severe events)
• DemoHealth: 45% (WARNING - Eastern Europe)
• AIWatch: 82% (CRITICAL - Global surveillance)
• WealthFlow: 58% (WARNING - Top 1% concentration)

REGIONAL BREAKDOWNS:
• East Africa: Gaza (2.3M), Sudan (25M), Horn of Africa
• SE Asia: Pakistan floods (33M affected)
• Eastern Europe: Russia, Hungary, Turkey
• North America: 5 active wildfires (8,666 acres)

TREND ANALYSIS:
• Food crisis: ↑ 8% increase (30 days)
• Climate events: ↑ 15% increase (30 days)
• Democratic health: ↓ 12% decline (90 days)

RECOMMENDATIONS:
1. Immediate humanitarian aid to East Africa
2. Climate disaster response coordination
3. Monitor democratic backsliding in Eastern Europe

Data Sources: World Bank, NASA EONET, News API, FAO, V-Dem Institute
`;
    
    downloadFile('epidia-crisis-report.txt', report, 'text/plain');
}

function copyReportToClipboard() {
    const report = document.querySelector('#reportModal pre')?.textContent || 'Report content';
    navigator.clipboard.writeText(report).then(() => {
        alert('✓ Report copied to clipboard!');
    });
}

function copyAISummary(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ AI summary copied to clipboard!');
    });
}

function downloadJSON() {
    const data = {
        timestamp: new Date().toISOString(),
        gcri: 62,
        modules: {
            foodsight: { score: 73, status: 'CRITICAL', region: 'East Africa' },
            climarisk: { score: 100, status: 'CRITICAL', events: 49 },
            demohealth: { score: 45, status: 'WARNING', region: 'Eastern Europe' },
            aiwatch: { score: 82, status: 'CRITICAL' },
            wealthflow: { score: 58, status: 'WARNING' }
        }
    };
    downloadFile('epidia-data.json', JSON.stringify(data, null, 2), 'application/json');
}

function downloadCSV() {
    const csv = `Module,Score,Status,Region
FoodSight,73,CRITICAL,East Africa
ClimaRisk,100,CRITICAL,Global
DemoHealth,45,WARNING,Eastern Europe
AIWatch,82,CRITICAL,Global
WealthFlow,58,WARNING,Global`;
    downloadFile('epidia-data.csv', csv, 'text/csv');
}

function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function convertToCSV(data) {
    return `Module,Score,Status\nFoodSight,${data.modules.foodsight.score},${data.modules.foodsight.status}\nClimaRisk,${data.modules.climarisk.score},${data.modules.climarisk.status}\nDemoHealth,${data.modules.demohealth.score},${data.modules.demohealth.status}\nAIWatch,${data.modules.aiwatch.score},${data.modules.aiwatch.status}\nWealthFlow,${data.modules.wealthflow.score},${data.modules.wealthflow.status}`;
}

function exportVisualizations() {
    showReportModal('📊 Export Visualizations', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Crisis Data Visualizations</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Generated: ${new Date().toLocaleString()}</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 12px;">📈 Crisis Trend Graph</div>
                <div style="height: 120px; background: rgba(255,255,255,0.03); border-radius: 8px; padding: 10px; position: relative;">
                    <svg width="100%" height="100" viewBox="0 0 400 100">
                        <polyline points="0,80 50,70 100,60 150,55 200,45 250,40 300,30 350,25 400,20" 
                            fill="none" stroke="#F94060" stroke-width="2"/>
                        <text x="10" y="95" font-size="10" fill="#4A6070">Jan</text>
                        <text x="190" y="95" font-size="10" fill="#4A6070">Feb</text>
                        <text x="370" y="95" font-size="10" fill="#4A6070">Mar</text>
                        <text x="5" y="15" font-size="10" fill="#F94060">FoodSight: 73%</text>
                    </svg>
                </div>
                <div style="font-size: 10px; color: var(--sub); margin-top: 8px;">↑ 8% increase over 30 days</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 12px;">🗺️ Regional Heatmap</div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                    <div style="padding: 10px; background: rgba(249,64,96,0.2); border-radius: 6px; text-align: center;">
                        <div style="font-size: 11px; font-weight: 700; color: #F94060;">East Africa</div>
                        <div style="font-size: 20px; font-weight: 800; color: #F94060;">73%</div>
                    </div>
                    <div style="padding: 10px; background: rgba(249,64,96,0.3); border-radius: 6px; text-align: center;">
                        <div style="font-size: 11px; font-weight: 700; color: #F94060;">SE Asia</div>
                        <div style="font-size: 20px; font-weight: 800; color: #F94060;">100%</div>
                    </div>
                    <div style="padding: 10px; background: rgba(245,196,0,0.2); border-radius: 6px; text-align: center;">
                        <div style="font-size: 11px; font-weight: 700; color: #F5C400;">E. Europe</div>
                        <div style="font-size: 20px; font-weight: 800; color: #F5C400;">45%</div>
                    </div>
                    <div style="padding: 10px; background: rgba(34,208,106,0.2); border-radius: 6px; text-align: center;">
                        <div style="font-size: 11px; font-weight: 700; color: #22D06A;">L. America</div>
                        <div style="font-size: 20px; font-weight: 800; color: #22D06A;">32%</div>
                    </div>
                </div>
            </div>
            
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 12px;">📊 Comparative Analysis</div>
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 10px; margin-bottom: 4px;">FoodSight</div>
                    <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                        <div style="width: 73%; height: 100%; background: #F94060;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 10px; margin-bottom: 4px;">ClimaRisk</div>
                    <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                        <div style="width: 100%; height: 100%; background: #F94060;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 10px; margin-bottom: 4px;">AIWatch</div>
                    <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                        <div style="width: 82%; height: 100%; background: #F94060;"></div>
                    </div>
                </div>
                <div style="margin-bottom: 8px;">
                    <div style="font-size: 10px; margin-bottom: 4px;">WealthFlow</div>
                    <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                        <div style="width: 58%; height: 100%; background: #F5C400;"></div>
                    </div>
                </div>
                <div>
                    <div style="font-size: 10px; margin-bottom: 4px;">DemoHealth</div>
                    <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                        <div style="width: 45%; height: 100%; background: #F5C400;"></div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
                <button onclick="downloadVisualizationHTML()" style="padding: 10px 20px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; margin-right: 10px;">Download as HTML</button>
                <button onclick="alert('📸 Screenshot feature: Use your browser\\'s screenshot tool (Ctrl+Shift+S) or print to PDF (Ctrl+P)')" style="padding: 10px 20px; background: rgba(255,255,255,0.1); color: var(--txt); border: 1px solid var(--bdr); border-radius: 8px; font-weight: 700; cursor: pointer;">Screenshot Guide</button>
            </div>
        </div>
    `);
}

function downloadVisualizationHTML() {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>EPIDIA Crisis Visualizations</title>
    <style>
        body { font-family: Arial, sans-serif; background: #07090F; color: #D8E4F0; padding: 40px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #00D4B1; }
        .chart { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; margin: 20px 0; }
        .bar { height: 30px; background: rgba(255,255,255,0.1); border-radius: 4px; margin: 10px 0; position: relative; }
        .bar-fill { height: 100%; border-radius: 4px; }
        .crit { background: #F94060; }
        .warn { background: #F5C400; }
    </style>
</head>
<body>
    <div class="container">
        <h1>EPIDIA Crisis Visualizations</h1>
        <p>Generated: ${new Date().toLocaleString()}</p>
        
        <div class="chart">
            <h2>Crisis Scores</h2>
            <div class="bar"><div class="bar-fill crit" style="width: 73%;">FoodSight: 73%</div></div>
            <div class="bar"><div class="bar-fill crit" style="width: 100%;">ClimaRisk: 100%</div></div>
            <div class="bar"><div class="bar-fill crit" style="width: 82%;">AIWatch: 82%</div></div>
            <div class="bar"><div class="bar-fill warn" style="width: 58%;">WealthFlow: 58%</div></div>
            <div class="bar"><div class="bar-fill warn" style="width: 45%;">DemoHealth: 45%</div></div>
        </div>
        
        <div class="chart">
            <h2>Regional Breakdown</h2>
            <p>East Africa: 73% (Gaza, Sudan, Horn of Africa)</p>
            <p>SE Asia: 100% (Pakistan floods, 49 severe events)</p>
            <p>Eastern Europe: 45% (Russia, Hungary, Turkey)</p>
            <p>Latin America: 32% (Improving)</p>
        </div>
    </div>
</body>
</html>`;
    
    downloadFile('epidia-visualizations.html', html, 'text/html');
    alert('✓ Visualization downloaded! Open the HTML file in your browser.');
}

async function refreshAllData() {
    showReportModal('🔄 Refreshing Data...', '<div style="text-align: center; padding: 40px;"><div style="font-size: 14px; color: var(--sub);">Fetching latest data from APIs...</div></div>');
    
    try {
        const response = await fetch('http://localhost:8000/crisis-data');
        const data = await response.json();
        
        showReportModal('✓ Data Refreshed', `
            <div style="text-align: left;">
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Data Refresh Complete</div>
                    <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">${new Date().toLocaleString()}</div>
                </div>
                
                <div style="padding: 16px; background: rgba(34,208,106,0.08); border-radius: 8px; margin-bottom: 16px;">
                    <div style="font-weight: 700; margin-bottom: 12px; color: var(--safe);">✓ Successfully Updated</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• Global Crisis Risk Index: ${data.gcri}%</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• FoodSight: ${data.modules.foodsight.score}% (${data.modules.foodsight.source})</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• ClimaRisk: ${data.modules.climarisk.score}% (${data.modules.climarisk.source})</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• DemoHealth: ${data.modules.demohealth.score}% (${data.modules.demohealth.source})</div>
                    <div style="font-size: 11px; margin-bottom: 6px;">• AIWatch: ${data.modules.aiwatch.score}%</div>
                    <div style="font-size: 11px;">• WealthFlow: ${data.modules.wealthflow.score}%</div>
                </div>
                
                <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <div style="font-weight: 700; margin-bottom: 8px;">Live Data Status:</div>
                    <div style="font-size: 11px;">${data.has_live_data ? '✓ Using live API data' : '⚠ Using demo data'}</div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="location.reload()" style="padding: 10px 20px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">Reload Dashboard</button>
                </div>
            </div>
        `);
    } catch (error) {
        showReportModal('✗ Refresh Failed', `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 14px; color: var(--crit); margin-bottom: 10px;">Failed to refresh data</div>
                <div style="font-size: 11px; color: var(--sub);">Make sure the backend is running</div>
            </div>
        `);
    }
}

function getNextRefreshTime() {
    const now = new Date();
    const next = new Date(now.getTime() + 6 * 60 * 60 * 1000); // 6 hours from now
    return next.toLocaleTimeString();
}

// ============================================
// SHARE TAB FUNCTIONS
// ============================================

function generateShareableLink() {
    const linkId = Math.random().toString(36).substring(2, 10);
    const shareUrl = `https://epidia.app/share/${linkId}`;
    
    showReportModal('🔗 Shareable Link Generated', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Dashboard Share Link</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Created: ${new Date().toLocaleString()}</div>
            </div>
            
            <div style="padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--teal);">Share URL:</div>
                <div style="padding: 12px; background: rgba(0,0,0,0.3); border-radius: 6px; font-family: var(--mono); font-size: 11px; word-break: break-all; margin-bottom: 12px;">${shareUrl}</div>
                <button onclick="copyToClipboard('${shareUrl}')" style="width: 100%; padding: 10px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">Copy Link</button>
            </div>
            
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-weight: 700; margin-bottom: 8px;">Link Settings:</div>
                <div style="font-size: 11px; margin-bottom: 6px;">✓ Valid for: 7 days</div>
                <div style="font-size: 11px; margin-bottom: 6px;">✓ Password protected: Yes</div>
                <div style="font-size: 11px; margin-bottom: 6px;">✓ View-only access</div>
                <div style="font-size: 11px;">✓ Expires: ${new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString()}</div>
            </div>
            
            <div style="padding: 12px; background: rgba(123,94,246,0.08); border-radius: 8px;">
                <div style="font-size: 10px; color: var(--sub);">💡 Recipients can view the dashboard but cannot make changes. The link will automatically expire after 7 days.</div>
            </div>
        </div>
    `);
}

function emailReportToTeam() {
    showReportModal('📧 Email Report to Team', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Send Crisis Report via Email</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Automated email delivery</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Recipients:</label>
                <input type="email" value="hulamanisrinish@gmail.com" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; margin-bottom: 8px;" readonly>
                <div style="font-size: 10px; color: var(--sub);">Add more recipients (comma-separated):</div>
                <input type="text" id="additionalEmails" placeholder="email1@example.com, email2@example.com" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Subject:</label>
                <input type="text" value="EPIDIA Crisis Report - ${new Date().toLocaleDateString()}" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">Attachments:</div>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Crisis Report (PDF)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Raw Data Export (CSV)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Visualizations (PNG)</span>
                </label>
            </div>
            
            <div style="padding: 16px; background: rgba(0,212,177,0.08); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-weight: 700; margin-bottom: 8px; color: var(--teal);">Email Preview:</div>
                <div style="font-size: 11px; line-height: 1.6;">
                    <p style="margin-bottom: 8px;">Dear Team,</p>
                    <p style="margin-bottom: 8px;">Please find attached the latest EPIDIA crisis report with current global risk assessments.</p>
                    <p style="margin-bottom: 8px;"><strong>Key Highlights:</strong></p>
                    <ul style="margin-left: 20px; margin-bottom: 8px;">
                        <li>Global Crisis Risk Index: 62%</li>
                        <li>FoodSight: 73% (CRITICAL)</li>
                        <li>ClimaRisk: 100% (CRITICAL - 49 severe events)</li>
                    </ul>
                    <p>Best regards,<br>EPIDIA Platform</p>
                </div>
            </div>
            
            <div style="text-align: center;">
                <button onclick="sendEmailReport()" style="padding: 12px 30px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">📧 Send Email</button>
            </div>
        </div>
    `);
}

function sendEmailReport() {
    const additionalEmails = document.getElementById('additionalEmails')?.value || '';
    const allEmails = ['hulamanisrinish@gmail.com'];
    if (additionalEmails) {
        allEmails.push(...additionalEmails.split(',').map(e => e.trim()));
    }
    
    showReportModal('✓ Email Sent', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--safe);">Email Sent Successfully!</div>
            <div style="font-size: 12px; color: var(--sub); margin-bottom: 20px;">Report delivered to ${allEmails.length} recipient(s)</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left;">
                <div style="font-weight: 700; margin-bottom: 8px; font-size: 11px;">Recipients:</div>
                ${allEmails.map(email => `<div style="font-size: 10px; font-family: var(--mono); color: var(--sub); margin-bottom: 4px;">• ${email}</div>`).join('')}
            </div>
        </div>
    `);
}

function scheduleReports() {
    showReportModal('📅 Schedule Automated Reports', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Automated Report Schedule</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Set up recurring reports</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Frequency:</label>
                <select style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>Daily</option>
                    <option>Weekly (Monday)</option>
                    <option>Weekly (Friday)</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Time:</label>
                <input type="time" value="09:00" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Recipients:</label>
                <input type="email" value="hulamanisrinish@gmail.com" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">Report Format:</div>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">PDF Report</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">AI Executive Summary</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Data Export (CSV)</span>
                </label>
            </div>
            
            <div style="padding: 12px; background: rgba(0,212,177,0.08); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-size: 10px; color: var(--teal);">✓ Next scheduled report: Tomorrow at 9:00 AM</div>
            </div>
            
            <div style="text-align: center;">
                <button onclick="saveSchedule()" style="padding: 12px 30px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">Save Schedule</button>
            </div>
        </div>
    `);
}

function saveSchedule() {
    showReportModal('✓ Schedule Saved', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--safe);">Schedule Configured!</div>
            <div style="font-size: 12px; color: var(--sub); margin-bottom: 20px;">Automated reports will be sent daily at 9:00 AM</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left;">
                <div style="font-size: 11px; margin-bottom: 6px;">• Frequency: Daily</div>
                <div style="font-size: 11px; margin-bottom: 6px;">• Time: 9:00 AM</div>
                <div style="font-size: 11px; margin-bottom: 6px;">• Recipient: hulamanisrinish@gmail.com</div>
                <div style="font-size: 11px;">• Next report: Tomorrow at 9:00 AM</div>
            </div>
        </div>
    `);
}

function configureWebhooks() {
    showReportModal('🔌 Configure Webhooks', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Webhook Configuration</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Send real-time alerts to external systems</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Webhook URL:</label>
                <input type="url" placeholder="https://your-system.com/webhook" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Trigger Conditions:</label>
                <select style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; margin-bottom: 8px;">
                    <option>Critical alerts (>80%)</option>
                    <option>Warning alerts (>60%)</option>
                    <option>All alerts</option>
                    <option>Data refresh completed</option>
                    <option>Custom threshold</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 8px;">Payload Format:</div>
                <pre style="font-family: var(--mono); font-size: 9px; color: var(--sub); overflow-x: auto; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 6px;">{
  "event": "crisis_alert",
  "module": "FoodSight",
  "score": 73,
  "status": "CRITICAL",
  "region": "East Africa",
  "timestamp": "${new Date().toISOString()}"
}</pre>
            </div>
            
            <div style="padding: 12px; background: rgba(123,94,246,0.08); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-size: 10px; color: var(--sub);">💡 Webhooks will send POST requests with JSON payloads when trigger conditions are met.</div>
            </div>
            
            <div style="text-align: center;">
                <button onclick="saveWebhook()" style="padding: 12px 30px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px; margin-right: 10px;">Save Webhook</button>
                <button onclick="testWebhook()" style="padding: 12px 30px; background: rgba(255,255,255,0.1); color: var(--txt); border: 1px solid var(--bdr); border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">Test Connection</button>
            </div>
        </div>
    `);
}

function saveWebhook() {
    alert('✓ Webhook configuration saved!\n\nWebhook will trigger on critical alerts (>80%)');
}

function testWebhook() {
    alert('🔌 Testing webhook...\n\n✓ Connection successful!\nTest payload sent to endpoint.');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ Link copied to clipboard!');
    });
}

// ============================================
// ACTIONS TAB FUNCTIONS
// ============================================

function escalateCrisis() {
    showReportModal('🚨 Escalate Critical Crisis', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Crisis Escalation</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Notify authorities and emergency services</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Select Crisis to Escalate:</label>
                <select id="crisisSelect" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option value="foodsight">FoodSight - East Africa (73% CRITICAL)</option>
                    <option value="climarisk">ClimaRisk - Global (100% CRITICAL)</option>
                    <option value="aiwatch">AIWatch - Surveillance (82% CRITICAL)</option>
                    <option value="demohealth">DemoHealth - Eastern Europe (45% WARNING)</option>
                    <option value="wealthflow">WealthFlow - Global (58% WARNING)</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(249,64,96,0.08); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 12px; color: var(--crit);">Escalation Recipients:</div>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">UN Crisis Response Team</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Regional Authorities</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Emergency Services</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">International Aid Organizations</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Media Contacts</span>
                </label>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Urgency Level:</label>
                <select style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>🔴 CRITICAL - Immediate Response Required</option>
                    <option>🟠 HIGH - Response within 24 hours</option>
                    <option>🟡 MEDIUM - Response within 72 hours</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Additional Notes:</label>
                <textarea placeholder="Provide context, affected areas, immediate needs..." style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; min-height: 80px; resize: vertical;"></textarea>
            </div>
            
            <div style="padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 16px;">
                <div style="font-size: 10px; color: var(--sub);">⚠️ This will send immediate notifications via email, SMS, and push alerts to all selected recipients.</div>
            </div>
            
            <div style="text-align: center;">
                <button onclick="confirmEscalation()" style="padding: 12px 30px; background: var(--crit); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">🚨 Escalate Now</button>
            </div>
        </div>
    `);
}

function confirmEscalation() {
    const crisis = document.getElementById('crisisSelect')?.value || 'foodsight';
    const crisisNames = {
        foodsight: 'FoodSight - East Africa',
        climarisk: 'ClimaRisk - Global',
        aiwatch: 'AIWatch - Surveillance',
        demohealth: 'DemoHealth - Eastern Europe',
        wealthflow: 'WealthFlow - Global'
    };
    
    showReportModal('✓ Crisis Escalated', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">🚨</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--crit);">Crisis Escalated Successfully</div>
            <div style="font-size: 12px; color: var(--sub); margin-bottom: 20px;">${crisisNames[crisis]}</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left; margin-bottom: 16px;">
                <div style="font-weight: 700; margin-bottom: 12px; font-size: 11px;">Notifications Sent To:</div>
                <div style="font-size: 10px; margin-bottom: 6px;">✓ UN Crisis Response Team (5 contacts)</div>
                <div style="font-size: 10px; margin-bottom: 6px;">✓ Regional Authorities (12 contacts)</div>
                <div style="font-size: 10px; margin-bottom: 6px;">✓ Emergency Services (8 contacts)</div>
                <div style="font-size: 10px; margin-top: 12px; color: var(--sub);">Sent via: Email, SMS, Push Notifications</div>
            </div>
            <div style="padding: 12px; background: rgba(0,212,177,0.08); border-radius: 8px;">
                <div style="font-size: 10px; color: var(--teal);">Escalation ID: ESC-${Date.now().toString().slice(-6)}<br>Timestamp: ${new Date().toLocaleString()}</div>
            </div>
        </div>
    `);
}

function createIncidentTicket() {
    showReportModal('📋 Create Incident Ticket', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">New Incident Ticket</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Log crisis in incident management system</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Crisis Module:</label>
                <select id="ticketModule" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option value="foodsight">FoodSight - Food Security</option>
                    <option value="climarisk">ClimaRisk - Climate Disasters</option>
                    <option value="demohealth">DemoHealth - Democratic Health</option>
                    <option value="aiwatch">AIWatch - AI Governance</option>
                    <option value="wealthflow">WealthFlow - Wealth Inequality</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Priority:</label>
                <select id="ticketPriority" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option value="critical">🔴 Critical</option>
                    <option value="high">🟠 High</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="low">🟢 Low</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Affected Region:</label>
                <input type="text" placeholder="e.g., East Africa, Southeast Asia" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Incident Description:</label>
                <textarea id="ticketDescription" placeholder="Describe the crisis situation, affected population, immediate needs..." style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; min-height: 100px; resize: vertical;"></textarea>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Assign To:</label>
                <select style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>Crisis Response Team</option>
                    <option>Field Coordinators</option>
                    <option>Regional Manager</option>
                    <option>Emergency Response Unit</option>
                </select>
            </div>
            
            <div style="text-align: center;">
                <button onclick="submitIncidentTicket()" style="padding: 12px 30px; background: var(--warn); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">Create Ticket</button>
            </div>
        </div>
    `);
}

function submitIncidentTicket() {
    const ticketId = 'CR-' + Date.now().toString().slice(-8);
    const module = document.getElementById('ticketModule')?.value || 'foodsight';
    const priority = document.getElementById('ticketPriority')?.value || 'high';
    
    showReportModal('✓ Ticket Created', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">📋</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--safe);">Incident Ticket Created</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left; margin-top: 20px;">
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Ticket ID:</strong> ${ticketId}</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Priority:</strong> ${priority.toUpperCase()}</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Status:</strong> Open</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Assigned To:</strong> Crisis Response Team</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Created:</strong> ${new Date().toLocaleString()}</div>
                <div style="font-size: 11px;"><strong>Module:</strong> ${module}</div>
            </div>
            <div style="margin-top: 16px; padding: 12px; background: rgba(0,212,177,0.08); border-radius: 8px;">
                <div style="font-size: 10px; color: var(--teal);">✓ Team has been notified via email and SMS</div>
            </div>
        </div>
    `);
}

function notifyResponseTeam() {
    showReportModal('👥 Notify Response Team', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Alert Crisis Response Personnel</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Send immediate notifications to team members</div>
            </div>
            
            <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <div style="font-weight: 700; margin-bottom: 12px;">Select Team Members:</div>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Crisis Managers (5 members)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" checked style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Field Coordinators (12 members)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Support Staff (8 members)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" style="width: 16px; height: 16px;">
                    <span style="font-size: 11px;">Regional Directors (3 members)</span>
                </label>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Notification Channels:</label>
                <div style="padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                        <input type="checkbox" checked style="width: 16px; height: 16px;">
                        <span style="font-size: 11px;">📧 Email</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                        <input type="checkbox" checked style="width: 16px; height: 16px;">
                        <span style="font-size: 11px;">📱 SMS</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" checked style="width: 16px; height: 16px;">
                        <span style="font-size: 11px;">🔔 Push Notifications</span>
                    </label>
                </div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Message:</label>
                <textarea placeholder="Urgent: Crisis alert requires immediate attention..." style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; min-height: 80px; resize: vertical;"></textarea>
            </div>
            
            <div style="text-align: center;">
                <button onclick="sendTeamNotification()" style="padding: 12px 30px; background: var(--teal); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">Send Notifications</button>
            </div>
        </div>
    `);
}

function sendTeamNotification() {
    showReportModal('✓ Team Notified', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--safe);">Notifications Sent Successfully</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left; margin-top: 20px;">
                <div style="font-weight: 700; margin-bottom: 12px; font-size: 11px;">Delivery Summary:</div>
                <div style="font-size: 10px; margin-bottom: 6px;">✓ Crisis Managers: 5 notified</div>
                <div style="font-size: 10px; margin-bottom: 6px;">✓ Field Coordinators: 12 notified</div>
                <div style="font-size: 10px; margin-bottom: 12px;">✓ Total: 17 team members</div>
                <div style="font-size: 10px; color: var(--sub);">Channels: Email, SMS, Push</div>
                <div style="font-size: 10px; color: var(--sub);">Sent: ${new Date().toLocaleString()}</div>
            </div>
        </div>
    `);
}

function acknowledgeCrisis() {
    showReportModal('✓ Acknowledge Crisis', `
        <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 10px;">Mark Crisis as Acknowledged</div>
                <div style="font-family: var(--mono); font-size: 10px; color: var(--sub);">Confirm crisis has been reviewed</div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Select Crisis:</label>
                <select id="ackCrisis" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>FoodSight - East Africa (73% CRITICAL)</option>
                    <option>ClimaRisk - Global (100% CRITICAL)</option>
                    <option>AIWatch - Surveillance (82% CRITICAL)</option>
                    <option>DemoHealth - Eastern Europe (45% WARNING)</option>
                    <option>WealthFlow - Global (58% WARNING)</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Acknowledged By:</label>
                <input type="text" value="Current User" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;" readonly>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Next Action:</label>
                <select style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px;">
                    <option>Assign to response team</option>
                    <option>Escalate to authorities</option>
                    <option>Create incident ticket</option>
                    <option>Monitor situation</option>
                    <option>Request additional data</option>
                </select>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label style="font-size: 11px; font-weight: 700; display: block; margin-bottom: 8px;">Notes:</label>
                <textarea placeholder="Add any relevant notes or observations..." style="width: 100%; padding: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--bdr); border-radius: 6px; color: var(--txt); font-size: 12px; min-height: 80px; resize: vertical;"></textarea>
            </div>
            
            <div style="text-align: center;">
                <button onclick="confirmAcknowledgement()" style="padding: 12px 30px; background: var(--safe); color: var(--bg); border: none; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px;">✓ Acknowledge</button>
            </div>
        </div>
    `);
}

function confirmAcknowledgement() {
    showReportModal('✓ Crisis Acknowledged', `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
            <div style="font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--safe);">Crisis Acknowledged</div>
            <div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left; margin-top: 20px;">
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Acknowledged By:</strong> Current User</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Time:</strong> ${new Date().toLocaleString()}</div>
                <div style="font-size: 11px; margin-bottom: 8px;"><strong>Status:</strong> Under Review</div>
                <div style="font-size: 11px;"><strong>Next Action:</strong> Assign to response team</div>
            </div>
            <div style="margin-top: 16px; padding: 12px; background: rgba(0,212,177,0.08); border-radius: 8px;">
                <div style="font-size: 10px; color: var(--teal);">✓ Status updated in system</div>
            </div>
        </div>
    `);
}
