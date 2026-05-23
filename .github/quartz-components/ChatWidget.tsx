import { QuartzComponentConstructor } from "./types"
import style from "./styles/chat-widget.scss"
// @ts-ignore
import script from "./scripts/chat-widget.inline"

export default (() => {
  function ChatWidget() {
    return (
      <div id="chat-widget-container">
        <button id="chat-widget-fab" aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <div id="chat-widget-panel" class="hidden">
          <div id="chat-widget-header">
            <span>Wiki Q&A</span>
            <div id="chat-widget-header-actions">
              <button id="chat-widget-settings-btn" aria-label="Settings">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </button>
              <button id="chat-widget-close-btn" aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div id="chat-widget-messages"></div>
          <div id="chat-widget-input-area">
            <textarea id="chat-widget-input" placeholder="Ask about your wiki..." rows="1"></textarea>
            <button id="chat-widget-send" aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
        <div id="chat-widget-settings-modal" class="hidden">
          <div id="chat-widget-settings-content">
            <h3>Settings</h3>
            <p style="font-size:0.75rem;color:#888;margin:0 0 8px">Defaults are pre-configured. Override only if needed.</p>
            <label>
              API Key (optional override)
              <input type="password" id="chat-settings-api-key" placeholder="Leave empty to use default" />
            </label>
            <label>
              API Base URL (optional override)
              <input type="text" id="chat-settings-api-base-url" placeholder="Leave empty to use default" />
            </label>
            <label>
              GitHub PAT (optional override)
              <input type="password" id="chat-settings-github-pat" placeholder="Leave empty to use default" />
            </label>
            <label>
              GitHub Repo (owner/repo)
              <input type="text" id="chat-settings-github-repo" placeholder="Auto-detected from publish config" />
            </label>
            <label>
              Branch
              <input type="text" id="chat-settings-github-branch" placeholder="main" />
            </label>
            <div id="chat-widget-settings-actions">
              <button id="chat-settings-save">Save</button>
              <button id="chat-settings-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  ChatWidget.afterDOMLoaded = script
  ChatWidget.css = style

  return ChatWidget
}) satisfies QuartzComponentConstructor
